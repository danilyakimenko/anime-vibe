class Preloader {
  selectors = {
    root: '[data-js-preloader]',
  }

  stateClasses = {
    isLock: 'is-lock',
  }

  sessionStorageKey = 'isPreloaderShow'

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    if (this.isPreloaderShown()) {
      this.removePreloader()
      return
    }

    this.showPreloader()
  }

  isPreloaderShown = () => {
    return sessionStorage.getItem(this.sessionStorageKey)
  }

  showPreloader = () => {
    sessionStorage.setItem(this.sessionStorageKey, 'true')
    document.documentElement.classList.add(this.stateClasses.isLock)
    this.bindEvents()
  }

  removePreloader = () => {
    this.rootElement.remove()
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  onAnimationEnd = () => {
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  bindEvents() {
    this.rootElement.addEventListener(
      'animationend',
      this.onAnimationEnd,
      { once: true },
    )
  }
}

export default Preloader