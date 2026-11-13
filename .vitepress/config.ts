import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '李正鹏',
  description:
    '西北工业大学控制工程硕士研究生。研究方向：基于深度学习的侧扫声纳图像生成与目标检测。',
  base: '/',
  useWebFonts: false,
  srcExclude: ['README.md', 'external/**'],
  lastUpdated: false,
  head: [['meta', { name: 'author', content: 'Code0bug' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: 'DRM显示子系统', link: '/linux/drm' },
    ],
    outline: { label: '目录', level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Code0bug' }],
    footer: {
      message:
        '西北工业大学控制工程硕士研究生。研究方向：基于深度学习的侧扫声纳图像生成与目标检测。',
      copyright: '李正鹏 · Code0bug',
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    notFound: {
      code: '404',
      title: '找不到页面',
      quote: '这个地址没有对应的内容。',
      linkText: '回到首页',
      linkLabel: '回到首页',
    },
  },
})
