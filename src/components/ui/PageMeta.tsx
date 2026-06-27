import { Helmet } from 'react-helmet-async'
import { defaultMeta } from '../../lib/seo'

interface PageMetaProps {
  title?: string
  description?: string
}

export function PageMeta({ title, description }: PageMetaProps) {
  const fullTitle = title ? `${title} | ${defaultMeta.siteName}` : defaultMeta.title
  const desc = description ?? defaultMeta.description

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={defaultMeta.keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:locale" content={defaultMeta.ogLocale} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
