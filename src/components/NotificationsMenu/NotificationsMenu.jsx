import './NotificationsMenu.scss'
import notificationsItems from '@/layouts/Header/items/notificationsItems'
import classNames from 'classnames'

const NotificationsMenu = (props) => {
  const {
    extraAttrs,
  } = props

  return (
    <dialog
      className="notifications-menu"
      {...extraAttrs}
    >
      <h2 className="notifications-menu__title h6">Notifications</h2>
      <ul className="notifications-menu__list">
        {notificationsItems.map((notificationsItem, index) => (
          <li
            className={classNames("notifications-menu__item", {
              'is-active': index === 0
            })}
            key={index}
            data-js-notifications-menu-list-item=""
          >
            {notificationsItem}
          </li>
        ))}
      </ul>
      <span
        className="notifications-menu__result"
        data-js-notifications-menu-result=""
      >
          There are no new notifications.
        </span>
    </dialog>
  )
}

export default NotificationsMenu  