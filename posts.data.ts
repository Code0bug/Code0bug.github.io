import { createContentLoader } from 'vitepress'
import { formatSiteDate, parseSiteDate } from './.vitepress/dates'

function excerptFrom(src: string | undefined): string {
  if (!src) return ''
  const body = src.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
  const paragraph: string[] = []
  for (const line of body.split(/\r?\n/)) {
    const text = line.trim()
    if (!text) {
      if (paragraph.length) break
      continue
    }
    if (text.startsWith('#')) continue
    if (/^-{3,}$/.test(text)) continue
    paragraph.push(text)
  }
  return paragraph
    .join(' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .trim()
}

export default createContentLoader(['posts/*.md', 'linux/*.md'], {
  includeSrc: true,
  transform(pages) {
    return pages
      .map((page) => ({
        title: String(page.frontmatter.title ?? ''),
        url: page.url,
        date: parseSiteDate(page.frontmatter.date),
        dateLabel: formatSiteDate(page.frontmatter.date),
        excerpt: excerptFrom(page.src),
      }))
      .sort((a, b) => b.date - a.date)
      .map(({ date: _date, ...post }) => post)
  },
})
