import { useEffect, useRef, useState } from 'react'

function createParticle() {
  return {
    x: Math.random(),
    y: Math.random(),
    radius: 0.7 + Math.random() * 2.1,
    speed: 0.2 + Math.random() * 0.9,
    alpha: 0.16 + Math.random() * 0.52,
    phase: Math.random() * Math.PI * 2,
    drift: 10 + Math.random() * 26,
  }
}

function drawPolygon(context, points, fillStyle) {
  context.beginPath()
  context.moveTo(points[0].x, points[0].y)

  for (let index = 1; index < points.length; index += 1) {
    context.lineTo(points[index].x, points[index].y)
  }

  context.closePath()
  context.fillStyle = fillStyle
  context.fill()
}

function strokeLine(context, start, end, lineWidth, strokeStyle) {
  context.beginPath()
  context.moveTo(start.x, start.y)
  context.lineTo(end.x, end.y)
  context.lineWidth = lineWidth
  context.strokeStyle = strokeStyle
  context.stroke()
}

function easeInOutSine(value) {
  return -(Math.cos(Math.PI * value) - 1) * 0.5
}

function drawFigure(context, x, y, slopeAngle, cycle, scale) {
  const pushReach = cycle * scale * 0.16
  const pushDrop = cycle * scale * 0.08
  const rearFoot = { x: -scale * 0.66, y: scale * 0.34 }
  const frontFoot = { x: scale * 0.22 + cycle * scale * 0.06, y: scale * 0.22 }
  const hip = { x: -scale * 0.1, y: -scale * 0.14 + cycle * scale * 0.02 }
  const shoulder = { x: scale * 0.16 + cycle * scale * 0.04, y: -scale * 0.68 + cycle * scale * 0.03 }
  const hands = { x: scale * 0.84 + pushReach, y: -scale * 0.84 + pushDrop }
  const head = { x: scale * 0.26, y: -scale * 1.02 }

  context.save()
  context.translate(x, y)
  context.rotate(slopeAngle - 0.08)
  context.lineCap = 'round'
  context.lineJoin = 'round'

  strokeLine(context, rearFoot, hip, scale * 0.12, 'rgba(9, 12, 18, 0.92)')
  strokeLine(context, frontFoot, hip, scale * 0.14, 'rgba(18, 22, 29, 0.94)')
  strokeLine(context, hip, shoulder, scale * 0.18, 'rgba(15, 18, 24, 0.96)')
  strokeLine(context, shoulder, hands, scale * 0.13, 'rgba(20, 25, 33, 0.96)')
  strokeLine(
    context,
    { x: shoulder.x - scale * 0.02, y: shoulder.y + scale * 0.05 },
    { x: hands.x - scale * 0.04, y: hands.y + scale * 0.12 },
    scale * 0.1,
    'rgba(217, 130, 68, 0.16)',
  )

  context.beginPath()
  context.arc(head.x, head.y, scale * 0.13, 0, Math.PI * 2)
  context.fillStyle = 'rgba(12, 15, 21, 0.98)'
  context.fill()

  context.beginPath()
  context.arc(head.x + scale * 0.02, head.y - scale * 0.01, scale * 0.13, 0, Math.PI * 2)
  context.fillStyle = 'rgba(255, 188, 120, 0.12)'
  context.fill()

  context.restore()
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    syncPreference()

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', syncPreference)
      return () => mediaQuery.removeEventListener('change', syncPreference)
    }

    mediaQuery.addListener(syncPreference)
    return () => mediaQuery.removeListener(syncPreference)
  }, [])

  return prefersReducedMotion
}

function HeroBackgroundCanvas() {
  const canvasRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return undefined
    }

    let animationFrameId = 0
    let width = 0
    let height = 0
    let disposed = false

    const particles = Array.from({ length: 82 }, () => createParticle())
    const noisePoints = Array.from({ length: 110 }, () => ({
      x: Math.random(),
      y: Math.random(),
      alpha: 0.03 + Math.random() * 0.08,
    }))

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const nextWidth = Math.max(1, Math.round(bounds.width))
      const nextHeight = Math.max(1, Math.round(bounds.height))
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.8)

      width = nextWidth
      height = nextHeight
      canvas.width = Math.round(nextWidth * devicePixelRatio)
      canvas.height = Math.round(nextHeight * devicePixelRatio)
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    const draw = (time) => {
      const seconds = time * 0.001
      const motionLevel = prefersReducedMotion ? 0 : 1
      const breathe = Math.sin(seconds * 0.35) * 7 * motionLevel
      const driftY = Math.cos(seconds * 0.28) * 5 * motionLevel
      const slopeStart = { x: -width * 0.08, y: height * 0.92 }
      const slopeEnd = { x: width * 0.9, y: height * 0.2 }
      const slopeAngle = Math.atan2(slopeEnd.y - slopeStart.y, slopeEnd.x - slopeStart.x)
      const slopeY = (x) => {
        const safeWidth = Math.max(1, slopeEnd.x - slopeStart.x)
        const ratio = (x - slopeStart.x) / safeWidth
        return slopeStart.y + (slopeEnd.y - slopeStart.y) * ratio
      }
      const pushLoop = (seconds * 0.23) % 1
      const pushProgress =
        pushLoop < 0.7
          ? easeInOutSine(pushLoop / 0.7)
          : 1 - easeInOutSine((pushLoop - 0.7) / 0.3)
      const pushTravel = Math.min(width, height) * 0.048 * pushProgress * motionLevel
      const cubeTravelX = Math.cos(slopeAngle) * pushTravel
      const cubeTravelY = Math.sin(slopeAngle) * pushTravel
      const cubeSettle = Math.sin(pushProgress * Math.PI) * 2.4 * motionLevel
      const cubeAnchorX = width * 0.53 + cubeTravelX
      const cubeAnchorY = slopeY(cubeAnchorX) - height * 0.018 + cubeTravelY - cubeSettle
      const cubeSize = Math.min(width, height) * 0.22
      const liftVector = { x: cubeSize * 0.26, y: -cubeSize * 0.16 }
      const frontBottomLeft = { x: cubeAnchorX - cubeSize * 0.22, y: cubeAnchorY + cubeSize * 0.05 }
      const frontBottomRight = { x: frontBottomLeft.x + cubeSize * 0.48, y: frontBottomLeft.y - cubeSize * 0.085 }
      const frontTopLeft = { x: frontBottomLeft.x, y: frontBottomLeft.y - cubeSize * 0.62 }
      const frontTopRight = { x: frontBottomRight.x, y: frontBottomRight.y - cubeSize * 0.62 }
      const topBackLeft = { x: frontTopLeft.x + liftVector.x, y: frontTopLeft.y + liftVector.y }
      const topBackRight = { x: frontTopRight.x + liftVector.x, y: frontTopRight.y + liftVector.y }
      const sideBottomRight = { x: frontBottomRight.x + liftVector.x, y: frontBottomRight.y + liftVector.y }
      const glowCenter = { x: topBackRight.x + cubeSize * 0.16, y: topBackRight.y + cubeSize * 0.06 }

      context.clearRect(0, 0, width, height)

      const baseGradient = context.createLinearGradient(0, 0, 0, height)
      baseGradient.addColorStop(0, '#030406')
      baseGradient.addColorStop(0.52, '#080a0e')
      baseGradient.addColorStop(1, '#020304')
      context.fillStyle = baseGradient
      context.fillRect(0, 0, width, height)

      const hazeGradient = context.createRadialGradient(
        width * 0.62,
        height * 0.32,
        0,
        width * 0.62,
        height * 0.32,
        Math.max(width, height) * 0.58,
      )
      hazeGradient.addColorStop(0, 'rgba(255, 161, 86, 0.12)')
      hazeGradient.addColorStop(0.5, 'rgba(255, 161, 86, 0.05)')
      hazeGradient.addColorStop(1, 'rgba(255, 161, 86, 0)')
      context.fillStyle = hazeGradient
      context.fillRect(0, 0, width, height)

      context.save()
      context.translate(breathe, driftY)

      const mainGlow = context.createRadialGradient(
        glowCenter.x,
        glowCenter.y,
        0,
        glowCenter.x,
        glowCenter.y,
        Math.max(width, height) * 0.28,
      )
      mainGlow.addColorStop(0, 'rgba(255, 210, 144, 0.92)')
      mainGlow.addColorStop(0.16, 'rgba(255, 169, 84, 0.52)')
      mainGlow.addColorStop(0.42, 'rgba(255, 126, 44, 0.18)')
      mainGlow.addColorStop(1, 'rgba(255, 126, 44, 0)')
      context.fillStyle = mainGlow
      context.fillRect(0, 0, width, height)

      for (const particle of particles) {
        const travel = seconds * particle.speed * 0.085 * motionLevel
        const particleX =
          ((particle.x + travel) % 1) * width * 0.9 + width * 0.05 + Math.sin(seconds + particle.phase) * particle.drift
        const particleY =
          ((particle.y - travel * 0.65 + 1) % 1) * height * 0.5 +
          slopeY(Math.min(width, particleX)) -
          height * 0.1

        if (particleY < 0 || particleY > height) {
          continue
        }

        context.beginPath()
        context.arc(particleX, particleY, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(255, 170, 96, ${particle.alpha})`
        context.fill()
      }

      drawPolygon(
        context,
        [
          slopeStart,
          slopeEnd,
          { x: width, y: height },
          { x: 0, y: height },
        ],
        '#111318',
      )

      const slopeSheen = context.createLinearGradient(0, height, width, 0)
      slopeSheen.addColorStop(0, 'rgba(255, 255, 255, 0)')
      slopeSheen.addColorStop(0.46, 'rgba(255, 200, 138, 0.04)')
      slopeSheen.addColorStop(0.7, 'rgba(255, 156, 72, 0.16)')
      slopeSheen.addColorStop(1, 'rgba(255, 255, 255, 0)')
      context.strokeStyle = slopeSheen
      context.lineWidth = Math.max(2, height * 0.02)
      context.beginPath()
      context.moveTo(slopeStart.x, slopeStart.y)
      context.lineTo(slopeEnd.x, slopeEnd.y)
      context.stroke()

      for (const point of noisePoints) {
        const pointX = point.x * width
        const pointY = slopeY(pointX) + point.y * height * 0.2
        context.fillStyle = `rgba(255, 179, 112, ${point.alpha})`
        context.fillRect(pointX, pointY, 1.2, 1.2)
      }

      drawPolygon(
        context,
        [frontTopLeft, frontTopRight, sideBottomRight, frontBottomRight],
        '#252932',
      )
      drawPolygon(
        context,
        [frontTopLeft, frontTopRight, topBackRight, topBackLeft],
        '#474c58',
      )
      drawPolygon(
        context,
        [frontTopRight, topBackRight, sideBottomRight, frontBottomRight],
        '#1c2029',
      )

      context.strokeStyle = 'rgba(255, 208, 143, 0.2)'
      context.lineWidth = Math.max(1.1, cubeSize * 0.01)
      context.beginPath()
      context.moveTo(frontTopLeft.x, frontTopLeft.y)
      context.lineTo(topBackLeft.x, topBackLeft.y)
      context.lineTo(topBackRight.x, topBackRight.y)
      context.lineTo(sideBottomRight.x, sideBottomRight.y)
      context.stroke()

      const rimGlow = context.createLinearGradient(
        frontTopLeft.x,
        frontTopLeft.y,
        topBackRight.x,
        topBackRight.y,
      )
      rimGlow.addColorStop(0, 'rgba(255, 196, 120, 0)')
      rimGlow.addColorStop(0.7, 'rgba(255, 196, 120, 0.22)')
      rimGlow.addColorStop(1, 'rgba(255, 196, 120, 0.4)')
      context.strokeStyle = rimGlow
      context.lineWidth = Math.max(1, cubeSize * 0.008)
      context.beginPath()
      context.moveTo(frontTopRight.x, frontTopRight.y)
      context.lineTo(topBackRight.x, topBackRight.y)
      context.lineTo(sideBottomRight.x, sideBottomRight.y)
      context.stroke()

      const contactShadow = context.createRadialGradient(
        cubeAnchorX + cubeSize * 0.04,
        cubeAnchorY + cubeSize * 0.09,
        0,
        cubeAnchorX + cubeSize * 0.04,
        cubeAnchorY + cubeSize * 0.09,
        cubeSize * 0.8,
      )
      contactShadow.addColorStop(0, 'rgba(0, 0, 0, 0.38)')
      contactShadow.addColorStop(1, 'rgba(0, 0, 0, 0)')
      context.fillStyle = contactShadow
      context.fillRect(
        cubeAnchorX - cubeSize * 0.7,
        cubeAnchorY - cubeSize * 0.1,
        cubeSize * 1.6,
        cubeSize,
      )

      drawFigure(
        context,
        frontBottomLeft.x - cubeSize * 0.18 - pushProgress * cubeSize * 0.02,
        slopeY(frontBottomLeft.x - cubeSize * 0.18) - cubeSize * 0.01 - cubeSettle * 0.4,
        slopeAngle,
        pushProgress,
        cubeSize * 0.42,
      )

      const beamGradient = context.createLinearGradient(
        topBackRight.x,
        topBackRight.y,
        width * 0.92,
        height * 0.14,
      )
      beamGradient.addColorStop(0, 'rgba(255, 178, 92, 0.26)')
      beamGradient.addColorStop(1, 'rgba(255, 178, 92, 0)')
      context.strokeStyle = beamGradient
      context.lineWidth = Math.max(1.4, cubeSize * 0.016)
      context.beginPath()
      context.moveTo(topBackRight.x, topBackRight.y + cubeSize * 0.08)
      context.lineTo(width * 0.94, height * 0.1)
      context.stroke()

      context.restore()

      const vignette = context.createRadialGradient(
        width * 0.5,
        height * 0.42,
        height * 0.1,
        width * 0.5,
        height * 0.42,
        Math.max(width, height) * 0.78,
      )
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)')
      vignette.addColorStop(0.6, 'rgba(0, 0, 0, 0.12)')
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.56)')
      context.fillStyle = vignette
      context.fillRect(0, 0, width, height)
    }

    const renderFrame = (time) => {
      if (disposed) {
        return
      }

      draw(time)

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(renderFrame)
      }
    }

    resize()
    draw(0)

    if (!prefersReducedMotion) {
      animationFrameId = window.requestAnimationFrame(renderFrame)
    }

    window.addEventListener('resize', resize)

    return () => {
      disposed = true
      window.removeEventListener('resize', resize)

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [prefersReducedMotion])

  return <canvas ref={canvasRef} className="preview-home__canvas" aria-hidden="true" />
}

export default HeroBackgroundCanvas
