class SearchMenu {
  selectors = {
    dialog: '[data-js-search-menu-dialog]',
    overlay: '[data-js-search-menu-overlay]',
    searchMenuButton: '[data-js-search-menu-button]',
    searchMenuInput: '[data-js-search-menu-input]',
    searchMenuListItem: '[data-js-search-menu-list-item]',
    searchMenuResult: '[data-js-search-menu-result]',
    searchMenuCard: '[data-js-search-menu-card]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.dialogElement = document.querySelector(this.selectors.dialog)
    this.overlayElement = document.querySelector(this.selectors.overlay)
    this.searchMenuButtonElement = document.querySelector(this.selectors.searchMenuButton)
    this.searchMenuInputElement = this.dialogElement.querySelector(this.selectors.searchMenuInput)
    this.searchMenuListItemElements = this.dialogElement.querySelectorAll(this.selectors.searchMenuListItem)
    this.searchMenuResultElement = this.dialogElement.querySelector(this.selectors.searchMenuResult)
    this.searchMenuCardElements = this.searchMenuResultElement.querySelectorAll(this.selectors.searchMenuCard)
    this.bindEvents()
  }

  open = () => {
    this.dialogElement.show()

    this.overlayElement.classList.add(this.stateClasses.isActive)
    document.documentElement.classList.add(this.stateClasses.isLock)

    this.searchMenuInputElement.addEventListener('transitionend', () => {
        this.searchMenuInputElement.focus()}, { once: true },
      )
  }

  close = () => {
    this.dialogElement.close()
    this.overlayElement.classList.remove(this.stateClasses.isActive)
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  onSearchMenuButtonClick = (event) => {
    event.preventDefault()

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

  onSearchMenuInput = (event) => {
    const searchValue = event.target.value.toLowerCase().trim()

    this.searchMenuCardElements.forEach((card) => {
      const title = card.dataset.title.toLowerCase()

      card.hidden = !title.includes(searchValue)
    })
  }

  bindEvents() {
    this.searchMenuButtonElement.addEventListener('click', this.onSearchMenuButtonClick)
    this.overlayElement.addEventListener('click', this.onOverlayClick)
    this.searchMenuListItemElements.forEach((listItem) => {
      listItem.addEventListener('click', this.onSearchMenuItemClick)})
    this.searchMenuInputElement.addEventListener('input', this.onSearchMenuInput)
  }
}

export default SearchMenu