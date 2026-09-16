class SearchMenu {
  selectors = {
    dialog: '[data-js-notifications-menu-dialog]',
    overlay: '[data-js-search-menu-overlay]',
    notificationsMenuButton: '[data-js-notifications-menu-button]',
    notificationsMenuListItem: '[data-js-notifications-menu-list-item]',
    notificationsMenuResult: '[data-js-notifications-menu-result]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.dialogElement = document.querySelector(this.selectors.dialog)
    this.overlayElement = document.querySelector(this.selectors.overlay)
    this.notificationsMenuButtonElement = document.querySelector(this.selectors.notificationsMenuButton)
    this.notificationsMenuListItemElements = this.dialogElement.querySelectorAll(this.selectors.notificationsMenuListItem)
    this.notificationsMenuResultElement = this.dialogElement.querySelector(this.selectors.notificationsMenuResult)
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

  onNotificationsMenuButtonClick = () => {
    if (this.dialogElement.open) {
      this.close()
      return
    }
    this.open()
  }

  onOverlayClick = () => {
    this.close()
  }

  onNotificationMenuItemClick = (event) => {
    const { target } = event
    const listItemValue = target.textContent.toLowerCase()

    this.notificationsMenuResultElement.textContent =
      `There are no new ${listItemValue === 'all' ? '' : listItemValue} notifications.`
    this.notificationsMenuListItemElements.forEach((item) => {
      item.classList.remove(this.stateClasses.isActive)
    })

    target.classList.add(this.stateClasses.isActive)
  }

  bindEvents() {
    this.notificationsMenuButtonElement.addEventListener('click', this.onNotificationsMenuButtonClick)
    this.overlayElement.addEventListener('click', this.onOverlayClick)
    this.notificationsMenuListItemElements.forEach((listItem) => {
      listItem.addEventListener('click', this.onNotificationMenuItemClick)
    })
  }
}

export default SearchMenu