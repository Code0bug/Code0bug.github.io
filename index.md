---
aside: false
---

我是李正鹏（Zhengpeng Li），GitHub 账号 [Code0bug](https://github.com/Code0bug)，西北工业大学控制工程专业的硕士研究生。

这里记录学习笔记，以及课题方向上的想法：基于深度学习的侧扫声纳图像生成与目标检测。下面列出的文章里，标题带有「示例文章」的是建站时的占位内容，之后会替换。

<script setup>
import { data as posts } from './posts.data'
</script>

## 文章

<ul class="post-list">
  <li v-for="post in posts" :key="post.url">
    <span class="post-meta">{{ post.dateLabel }}</span>
    <h3>
      <a class="post-link" :href="post.url">{{ post.title }}</a>
    </h3>
    <p v-if="post.excerpt" class="post-excerpt">{{ post.excerpt }}</p>
  </li>
</ul>
