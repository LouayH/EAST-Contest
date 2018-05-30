import vFooter from '../footer/footer.vue'
export default {
  name: 'Home',
  components: {
    vFooter
  },
  computed: {
    content () { return this.$store.state.content }
  },
  created () {
    document.querySelector('body').setAttribute('id', 'home')
  }
}
