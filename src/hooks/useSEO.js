import { useEffect } from 'react'

const DEFAULT_SITE_URL = 'https://preview.thatsoftwarehouse.com/'
const DEFAULT_SITE_NAME = 'TSH Website Previews'
const DEFAULT_OG_IMAGE = `${DEFAULT_SITE_URL}og/fb-cover.png`

function toAbsoluteUrl(value, fallbackBase = DEFAULT_SITE_URL) {
  if (!value) {
    return ''
  }

  try {
    return new URL(value, fallbackBase).toString()
  } catch {
    return value
  }
}

export function useSEO({
  title,
  description,
  canonicalUrl,
  openGraph = {},
  robots = 'noindex,nofollow',
}) {
  useEffect(() => {
    const absoluteCanonicalUrl = toAbsoluteUrl(
      canonicalUrl,
      typeof window !== 'undefined' ? window.location.href : DEFAULT_SITE_URL,
    )
    const absoluteImageUrl = toAbsoluteUrl(
      openGraph.image || DEFAULT_OG_IMAGE,
      absoluteCanonicalUrl || DEFAULT_SITE_URL,
    )
    const resolvedTitle = openGraph.title || title || DEFAULT_SITE_NAME
    const resolvedDescription = openGraph.description || description

    if (title) {
      document.title = title
    }

    const setMetaTag = (name, content, property = false) => {
      if (!content) return

      const attr = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attr}="${name}"]`)

      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }

      meta.setAttribute('content', content)
    }

    setMetaTag('description', description)
    setMetaTag('robots', robots)
    setMetaTag('og:title', resolvedTitle, true)
    setMetaTag('og:description', resolvedDescription, true)
    setMetaTag('og:type', openGraph.type || 'website', true)
    setMetaTag('og:url', toAbsoluteUrl(openGraph.url || absoluteCanonicalUrl), true)
    setMetaTag('og:site_name', DEFAULT_SITE_NAME, true)
    setMetaTag('og:locale', openGraph.locale || 'en_US', true)
    setMetaTag('og:image', absoluteImageUrl, true)
    setMetaTag('og:image:alt', openGraph.imageAlt || `${resolvedTitle} social preview`, true)
    setMetaTag('twitter:card', openGraph.twitterCard || 'summary_large_image')
    setMetaTag('twitter:title', resolvedTitle)
    setMetaTag('twitter:description', resolvedDescription)
    setMetaTag('twitter:image', absoluteImageUrl)
    setMetaTag('twitter:image:alt', openGraph.imageAlt || `${resolvedTitle} social preview`)

    if (absoluteCanonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', absoluteCanonicalUrl)
    }
  }, [title, description, canonicalUrl, openGraph, robots])
}

export default useSEO
