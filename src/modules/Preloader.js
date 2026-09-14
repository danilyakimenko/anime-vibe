class Preloader {
  selectors = {
    root: '[data-js-preloader]'
  }

  stateClasses = {
    isLock: 'is-lock'
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    document.documentElement.classList.add(this.stateClasses.isLock)

    this.bindEvents()
  }

  onAnimationEnd = () => {
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  bindEvents() {
    this.rootElement.addEventListener('animationend', this.onAnimationEnd )
  }
}

export default Preloader