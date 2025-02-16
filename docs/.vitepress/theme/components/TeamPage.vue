<template>
  <VPTeamMembers size="small" :members="members" />
</template>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/74690352?v=4',
    name: 'W.P.S Lakshitha',
    title: 'Co-Founder',
    links: [
      { icon: 'github', link: 'https://github.com/wpslakshitha' },
      { icon: 'twitter', link: 'https://twitter.com/wpslakshitha.eg' }
    ]
  },
    {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator of Vue.js',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/antfu.png',
    name: 'Anthony Fu',
    title: 'Vue.js Core Team',
    links: [
      { icon: 'github', link: 'https://github.com/antfu' },
      { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  },
]
</script>
