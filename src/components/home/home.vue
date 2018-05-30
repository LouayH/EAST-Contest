<template>
  <main>
    <section id="description" v-html="content.description"></section>
    <section id="more">
      <article v-for="(item, i) in content.menu" :key="i">
        <h2 v-html="item.article.h2"></h2>
        <p v-html="item.article.p"></p>
        <router-link :to="item.link" v-html="item.article.button"></router-link>
      </article>
    </section>
    <vFooter></vFooter>
  </main>
</template>
<script src="./home.js"></script>
<style src="./home.scss" lang="scss"></style>
