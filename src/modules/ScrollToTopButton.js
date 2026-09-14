class ScrollToTopButton {
  selectors = {
    root: '[data-js-scroll-to-top-button]'
  }

  stateClasses = {
    isVisible: 'is-visible'
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.bindEvents()
  }

  onWindowScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      this.rootElement.classList.add(this.stateClasses.isVisible)
    } else {
      this.rootElement.classList.remove(this.stateClasses.isVisible)
    }
  }

  bindEvents() {
    window.addEventListener('scroll', this.onWindowScroll)
  }
}

export default ScrollToTopButton