// src/components/PersonSchema.tsx
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gray Hodge',
    url: 'https://gradyhodge.com',
    jobTitle: 'Fractional Chief AI Officer',
    description:
      'I build AI systems that help small businesses compete — and teach them how.',
    sameAs: [
      'https://github.com/GradyHodge',
      'https://linkedin.com/in/gradyhodge',
      'https://galvanizedesigns.com',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
