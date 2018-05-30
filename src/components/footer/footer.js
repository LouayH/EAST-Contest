export default {
  name: 'vFooter',
  computed: {
    content () { return this.$store.state.content },
    page () { return document.querySelector('body#about main #page, body#services main #page') }
  },
  methods: {
    show_scroll () {
      if (this.page.scrollTop > 100) {
        document.querySelector('#scroll').setAttribute('style', 'bottom: 112px')
      } else {
        document.querySelector('#scroll').setAttribute('style', 'bottom: -100px')
      }
    },
    scroll_to_top () {
      this.page.scrollTo({top: 0, behavior: 'smooth'})
    }
  },
  mounted () {
    if (this.page) {
      this.page.addEventListener('scroll', this.show_scroll)
      this.$nextTick(() => { this.show_scroll() })
    }
  },
  beforeDestroy () {
    if (this.page) {
      this.page.removeEventListener('scroll', this.onScroll)
    }
  }
}
