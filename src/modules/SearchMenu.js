class SearchMenu {
  selectors = {
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
    this.searchMenuButtonElement = document.querySelector(this.selectors.searchMenuButton)
    this.searchMenuInputElement = this.dialogElement.querySelector(this.selectors.searchMenuInput)
    this.searchMenuListItemElements = this.dialogElement.querySelectorAll(this.selectors.searchMenuListItem)
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

  onSearchMenuItemClick = (event) => {
    const { target } = event
    const listItemValue = target.textContent.toLowerCase()

    this.searchMenuInputElement.placeholder = `Search ${listItemValue}`
    this.searchMenuListItemElements.forEach((item) => {
      item.classList.remove(this.stateClasses.isActive)
    })

    target.classList.add(this.stateClasses.isActive)
  }

  bindEvents() {
    this.searchMenuButtonElement.addEventListener('click', this.onSearchMenuButtonClick)
    this.overlayElement.addEventListener('click', this.onOverlayClick)
    this.searchMenuListItemElements.forEach((listItem) => {
      listItem.addEventListener('click', this.onSearchMenuItemClick)
    })
  }
}

export default SearchMenu