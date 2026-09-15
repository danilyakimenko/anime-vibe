class SearchMenu {
  selectors = {
    root: '[data-js-search-menu]',
    dialog: '[data-js-search-menu-dialog]',
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
    this.searchMenuButtonElement = document.querySelector(this.selectors.searchMenuButton)
    this.bindEvents()
  }

  onSearchMenuButtonClick = () => {
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.searchMenuButtonElement.addEventListener('click', this.onSearchMenuButtonClick)
  }
}

export default SearchMenu