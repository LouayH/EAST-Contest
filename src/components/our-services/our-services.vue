<template>
  <main>
    <vAside></vAside>
    <div id="page">
      <section v-for="(section, i) in this.content.services" :key="i">
        <h2 v-show="section.title" v-html="section.title"></h2>
        <p v-show="section.body" v-html="section.body"></p>
        <ul v-show="section.list">
          <li v-for="(item, i) in section.list" v-html="item" :key="i"></li>
        </ul>
      </section>
      <vFooter></vFooter>
    </div>
  </main>
</template>
<script src="./our-services.js"></script>
<style src="./our-services.scss" lang="scss"></style>
