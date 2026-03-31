// src/components/ArticleSchema.tsx
interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  url: string
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    url,
    author: {
      '@type': 'Person',
      name: 'Gray Hodge',
      url: 'https://gradyhodge.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Gray Hodge',
      url: 'https://gradyhodge.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
