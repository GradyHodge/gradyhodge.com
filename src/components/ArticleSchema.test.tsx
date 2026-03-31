// src/components/ArticleSchema.test.tsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ArticleSchema } from './ArticleSchema'

const props = {
  headline: 'Test Article',
  description: 'A test description',
  datePublished: '2026-01-01',
  url: 'https://gradyhodge.com/writing/test-article',
}

describe('ArticleSchema', () => {
  it('renders a script tag with type application/ld+json', () => {
    const { container } = render(<ArticleSchema {...props} />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
  })

  it('has @type Article', () => {
    const { container } = render(<ArticleSchema {...props} />)
    const data = JSON.parse(
      container.querySelector('script[type="application/ld+json"]')!.textContent!
    )
    expect(data['@type']).toBe('Article')
  })

  it('includes headline, datePublished, and author', () => {
    const { container } = render(<ArticleSchema {...props} />)
    const data = JSON.parse(
      container.querySelector('script[type="application/ld+json"]')!.textContent!
    )
    expect(data.headline).toBe('Test Article')
    expect(data.datePublished).toBe('2026-01-01')
    expect(data.author['@type']).toBe('Person')
    expect(data.author.name).toBe('Gray Hodge')
  })
})
