export default {
  name: 'vHeader',
  data () {
    return {
      isButtonShown: null,
      isMenuShown: null,
      setShownClass: null
    }
  },
  computed: {
    content () { return this.$store.state.content }
  },
  watch: {
    $route (to, from) {
      this.init_menu()
    }
  },
  methods: {
    init_menu () {
      if (document.documentElement.clientWidth < 768) {
        this.isButtonShown = true
        this.isMenuShown = false
      } else {
        this.isButtonShown = false
        this.isMenuShown = true
      }

      if (this.isMenuShown) {
        document.querySelector('body').classList.add('mobile-menu-shown')
      } else {
        document.querySelector('body').classList.remove('mobile-menu-shown')
      }
    },
    toggle_menu () {
      this.isMenuShown = !this.isMenuShown
      if (this.isButtonShown) {
        document.querySelector('body').classList.add('mobile-menu-shown')
      } else {
        document.querySelector('body').classList.remove('mobile-menu-shown')
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.init_menu)
    this.$nextTick(() => { this.init_menu() })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
