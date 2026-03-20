import ConstructionScrollHero from '../components/ConstructionScrollHero'
import { useSEO } from '../hooks/useSEO'

function ConstructionHeroDemo() {
  useSEO({
    title: 'Construction Hero Demo | TSH Previews',
    description:
      'Scroll-driven hero demo using sequential construction frames to reveal a completed home build.',
    canonicalUrl: 'https://preview.thatsoftwarehouse.com/construction-hero-demo',
    openGraph: {
      title: 'Construction Hero Demo | TSH Previews',
      description:
        'A scroll-animated hero demo that advances through a house construction sequence frame by frame.',
      url: 'https://preview.thatsoftwarehouse.com/construction-hero-demo',
    },
  })

  return <ConstructionScrollHero />
}

export default ConstructionHeroDemo
