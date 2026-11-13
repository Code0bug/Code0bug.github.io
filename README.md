# 李正鹏的个人博客

这是发布在 <https://code0bug.github.io> 的个人站点，仓库名是 `Code0bug.github.io`。站点使用 [Jekyll](https://jekyllrb.com/) 和 GitHub Pages 支持的 [minima](https://github.com/jekyll/minima) 主题。

## 站点是怎么发布的

这是用户站点（user site），不是项目站点。页面必须从**默认分支 `main` 的根目录**发布：

- 不要改到 `/docs`
- 不要改用 `gh-pages` 分支
- 不要在仓库根目录放 `.nojekyll`，否则 GitHub Pages 不会跑 Jekyll

GitHub Pages 使用自带的 Jekyll 构建（`build_type: legacy`，源为分支 `main`、路径 `/`）。不需要单独的部署用 GitHub Actions。配置见 `_config.yml`：

- `url`：`https://code0bug.github.io`
- `baseurl`：空
- `lang`：`zh-CN`
- `timezone`：`Asia/Shanghai`

把改动合并进 `main` 之后，GitHub 会自动重新构建。**第一次部署常常要几分钟**，有时更久。可以在仓库的 Settings → Pages 查看状态；构建完成后打开 <https://code0bug.github.io>。若暂时还是旧页面或 404，先等这一轮构建结束再刷新。

## 怎样新增一篇文章

1. 在 `_posts` 目录新建文件。文件名必须是 `年-月-日-短标题.md`，例如 `_posts/2026-11-20-reading-note.md`。日期用连字符，短标题用英文或拼音，避免空格。
2. 文件开头写上 front matter。`date` 建议带上 `+0800`：

   ```markdown
   ---
   layout: post
   title: "文章标题"
   date: 2026-11-20 21:00:00 +0800
   author: Code0bug
   ---

   正文从这里开始，使用 Markdown。
   ```

3. 用 Markdown 写正文。站内页面是中文。
4. 提交并合并到 `main`。合并后等待 GitHub Pages 构建完成。

`date` 如果晚于构建当时的上海时间，文章不会出现在列表里，要到那个时间之后的下一次构建才会公开。

建站时放了两篇标题以「示例文章」开头的占位文章，可以改掉或直接删除对应文件：

- `_posts/2026-11-13-welcome.md`
- `_posts/2026-11-13-sonar-note.md`

关于页是 `about.md`。首页介绍在 `index.md`，文章列表由主题自动生成。

## 本地预览

需要 Ruby。在仓库根目录执行：

```bash
bundle install
bundle exec jekyll serve
```

然后打开 <http://127.0.0.1:4000>。`Gemfile` 里的 `github-pages` 版本用来在本地贴近 GitHub Pages 的环境；线上实际用的是 GitHub 自己的构建，不会读取这个仓库里的 Actions 来发布。
