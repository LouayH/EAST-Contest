<template>
  <footer>
    <div id="scroll" @click="scroll_to_top"></div>
    <p v-html="content.copyrights"></p>
  </footer>
</template>
<script src="./footer.js"></script>
<style src="./footer.scss" lang="scss"></style>
