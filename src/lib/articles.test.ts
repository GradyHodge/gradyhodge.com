// src/lib/articles.test.ts
import { describe, it, expect } from 'vitest'
import { getArticles, getArticle } from './articles'

describe('getArticle', () => {
  it('returns null for a slug that does not exist', () => {
    expect(getArticle('does-not-exist-xyz')).toBeNull()
  })

  it('returns article with all required fields for a known slug', () => {
    const article = getArticle('_fixture')
    expect(article).not.toBeNull()
    expect(article?.slug).toBe('_fixture')
    expect(article?.title).toBe('Test Article Fixture')
    expect(article?.description).toBe('Used for unit tests only — not published')
    expect(article?.date).toBe('2026-01-01')
    expect(article?.pillar).toBe('Build Stories')
    expect(article?.content).toContain('This is test content')
  })
})

describe('getArticles', () => {
  it('returns an array', () => {
    const articles = getArticles()
    expect(Array.isArray(articles)).toBe(true)
  })

  it('returns articles sorted by date descending', () => {
    const articles = getArticles()
    for (let i = 1; i < articles.length; i++) {
      expect(new Date(articles[i - 1].date).getTime()).toBeGreaterThanOrEqual(
        new Date(articles[i].date).getTime()
      )
    }
  })

  it('includes the fixture article', () => {
    const articles = getArticles()
    const fixture = articles.find(a => a.slug === '_fixture')
    expect(fixture).toBeDefined()
  })
})
