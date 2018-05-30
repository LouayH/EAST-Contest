import vAside from '../aside/aside.vue'
import vFooter from '../footer/footer.vue'
export default {
  name: 'AboutUs',
  components: {
    vAside,
    vFooter
  },
  computed: {
    content () { return this.$store.state.content }
  },
  created () {
    document.querySelector('body').setAttribute('id', 'about')
  }
}
