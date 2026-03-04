import { useEffect } from 'react'

export function useSEO({
  title,
  description,
  canonicalUrl,
  openGraph = {},
}) {
  useEffect(() => {
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
    setMetaTag('robots', 'noindex,nofollow')
    setMetaTag('og:title', openGraph.title || title, true)
    setMetaTag('og:description', openGraph.description || description, true)
    setMetaTag('og:type', openGraph.type || 'website', true)
    setMetaTag('og:url', openGraph.url || canonicalUrl, true)

    if (openGraph.image) {
      setMetaTag('og:image', openGraph.image, true)
    }

    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonicalUrl)
    }
  }, [title, description, canonicalUrl, openGraph])
}

export default useSEO

