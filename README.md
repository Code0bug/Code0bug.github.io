# 李正鹏的个人博客

这是发布在 <https://code0bug.github.io> 的个人站点，仓库名是 `Code0bug.github.io`。站点使用 [VitePress](https://vitepress.dev/)，由 GitHub Actions 构建后发布到 GitHub Pages。

这是用户站点，不是项目站点。VitePress 的 `base` 是 `/`，页面在 <https://code0bug.github.io/>，不使用 `/MyBlog/` 或其他子路径。

仓库 Settings → Pages 的 Source 需要是 **GitHub Actions**。把改动合并进 `main` 之后，Actions 会构建并部署。**第一次部署常常要几分钟**，有时更久。可以在 Actions 页看这一轮是否跑完，完成后再打开 <https://code0bug.github.io>。若暂时还是旧页面，先等部署结束再刷新。

## 怎样新增一篇文章

1. 在 `posts` 目录新建文件。文件名用 `年-月-日-短标题.md`，例如 `posts/2026-11-20-reading-note.md`。日期用连字符，短标题用英文或拼音，避免空格。
2. 文件开头写上 front matter。`date` 建议带上 `+0800`，站点按 `Asia/Shanghai` 显示日期：

   ```markdown
   ---
   title: "文章标题"
   date: "2026-11-20 21:00:00 +0800"
   author: Code0bug
   ---

   正文从这里开始，使用 Markdown。
   ```

3. 用 Markdown 写正文。站内页面是中文。
4. 提交并合并到 `main`。合并后等待 GitHub Actions 部署完成。首页的文章列表会带上这篇。

关于页是 `about.md`。首页介绍在 `index.md`。导航里的「DRM显示子系统」对应 `linux/drm.md`。

建站时放了两篇标题以「示例文章」开头的占位文章，可以改掉或直接删除对应文件：

- `posts/2026-11-13-welcome.md`
- `posts/2026-11-13-sonar-note.md`

## 源码导入

`linux/drm.md` 里，`应用层libdrm` 下面这一行还是原文的引用：

```markdown
> linux-demo/drm/modeset-atomic-plane.c
```

紧接着的示例不再把 C 源码贴进 Markdown，而是用 VitePress 的 `<<<` 在构建时读入文件：

```markdown
<<< ../external/linux-demo/drm/modeset-atomic-plane.c
```

这个路径相对 `linux/drm.md`，指向仓库根目录下的 `external/linux-demo`。对应的上游是 <https://github.com/Code0bug/Linux-Demo> 的 `master` 分支，文件是 `drm/modeset-atomic-plane.c`。

GitHub Actions 会在构建前把该仓库检出到 `external/linux-demo`（公开仓库，不需要 token）。这个目录写在 `.gitignore` 里，不要提交。笔记里的其他代码块仍是原文，没有改成导入；`linux-demo/drm/drm-camera-preview.c` 只是正文里的路径说明。

## 本地预览

需要 Node.js 22。先把 Linux-Demo 放到和线上相同的位置，再安装依赖、启动预览：

```bash
git clone https://github.com/Code0bug/Linux-Demo.git external/linux-demo
npm ci
npm run dev
```

然后打开 <http://localhost:5173>。只想看构建结果时，用 `npm run build` 和 `npm run preview`。没有检出 `external/linux-demo` 时，DRM 那一节的源码导入会在构建时报找不到文件。
