class SearchMenu {
  selectors = {
    root: '[data-js-search-menu]',
    dialog: '[data-js-search-menu-dialog]',
    overlay: '[data-js-search-menu-overlay]',
    searchMenuButton: '[data-js-search-menu-button]',
    searchMenuInput: '[data-js-search-menu-input]',
    searchMenuListItem: '[data-js-search-menu-list-item]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = document.querySelector(this.selectors.dialog)
    this.overlayElement = document.querySelector(this.selectors.overlay)
    this.searchMenuButtonElement = document.querySelector(
      this.selectors.searchMenuButton,
    )

    this.bindEvents()
  }

  open = () => {
    this.dialogElement.show()

    this.overlayElement.classList.add(
      this.stateClasses.isActive,
    )

    document.documentElement.classList.add(
      this.stateClasses.isLock,
    )
  }

  close = () => {
    this.dialogElement.close()

    this.overlayElement.classList.remove(
      this.stateClasses.isActive,
    )

    document.documentElement.classList.remove(
      this.stateClasses.isLock,
    )
  }

  onSearchMenuButtonClick = () => {
    if (this.dialogElement.open) {
      this.close()
      return
    }

    this.open()
  }

  onOverlayClick = () => {
    this.close()
  }

  bindEvents() {
    this.searchMenuButtonElement.addEventListener(
      'click',
      this.onSearchMenuButtonClick,
    )

    this.overlayElement.addEventListener(
      'click',
      this.onOverlayClick,
    )
  }
}

export default SearchMenu