<template>
  <aside>
    <nav id="side-menu">
      <router-link v-for="(nav, i) in content.menu" :to="nav.link" v-html="nav.title" :key="i"></router-link>
    </nav>
    <div class="social_links">
      <a v-for="(link, i) in content.social_links" :href="link.url" v-html="link.svg" :key="i" target="_blank"></a>
    </div>
  </aside>
</template>
<script src="./aside.js"></script>
<style src="./aside.scss" lang="scss"></style>
