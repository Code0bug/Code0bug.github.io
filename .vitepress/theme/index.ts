import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { formatSiteDate } from '../dates'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-after': () =>
        h('span', { class: 'site-subtitle' }, 'Code0bug'),
      'doc-before': () => {
        const fm = frontmatter.value
        const nodes = []
        if (fm.date) {
          const author = fm.author || 'Code0bug'
          nodes.push(
            h(
              'p',
              { class: 'post-meta' },
              `${formatSiteDate(fm.date)} · ${author}`,
            ),
          )
        }
        if (fm.title && fm.pageClass !== 'source-note') {
          nodes.push(h('h1', { class: 'page-title' }, String(fm.title)))
        }
        return nodes.length ? h('div', { class: 'doc-lead' }, nodes) : null
      },
    })
  },
} satisfies Theme
