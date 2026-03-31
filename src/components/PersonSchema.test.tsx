// src/components/PersonSchema.test.tsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PersonSchema } from './PersonSchema'

describe('PersonSchema', () => {
  it('renders a script tag with type application/ld+json', () => {
    const { container } = render(<PersonSchema />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
  })

  it('contains valid JSON', () => {
    const { container } = render(<PersonSchema />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(() => JSON.parse(script!.textContent!)).not.toThrow()
  })

  it('has correct schema.org type and name', () => {
    const { container } = render(<PersonSchema />)
    const script = container.querySelector('script[type="application/ld+json"]')
    const data = JSON.parse(script!.textContent!)
    expect(data['@context']).toBe('https://schema.org')
    expect(data['@type']).toBe('Person')
    expect(data.name).toBe('Gray Hodge')
    expect(data.jobTitle).toBe('Fractional Chief AI Officer')
  })

  it('includes sameAs links', () => {
    const { container } = render(<PersonSchema />)
    const data = JSON.parse(
      container.querySelector('script[type="application/ld+json"]')!.textContent!
    )
    expect(data.sameAs).toContain('https://github.com/GradyHodge')
    expect(data.sameAs).toContain('https://linkedin.com/in/gradyhodge')
    expect(data.sameAs).toContain('https://galvanizedesigns.com')
  })
})
