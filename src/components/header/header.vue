<template>
  <header>
    <button id="menu_button" v-show="isButtonShown" :class="{'toggle': true, 'clicked': isMenuShown}" @click="toggle_menu">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <router-link id="logo" to="/">
      <h1 v-html="content.logo.title"></h1>
      <span id="sep"></span>
      <small v-html="content.logo.small"></small>
    </router-link>
    <nav id="menu" v-show="isMenuShown" :class="{'toggle': true, 'shown': isMenuShown}">
      <router-link v-for="(nav, i) in content.menu" :to="nav.link" v-html="nav.title" :key="i" @click="toggle_menu"></router-link>
      <div class="social_links">
        <a v-for="(link, i) in content.social_links" :href="link.url" v-html="link.svg" :key="i" target="_blank"></a>
      </div>
    </nav>
    <span id="tel" v-html="content.about[3].list[2]"></span>
  </header>
</template>
<script src="./header.js"></script>
<style src="./header.scss" lang="scss"></style>
