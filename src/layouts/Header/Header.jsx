import './Header.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import menuItems from './items/menuItems'
import searchItems from './items/searchItems'
import { getUrl } from '@/utils/getUrl'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import notificationsItems from '@/layouts/Header/items/notificationsItems'

const Header = (props) => {
  const {
    url,
    isFixed,
  } = props

  return (
    <header
      className={classNames('header', {
        'is-fixed': isFixed,
      })}
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo
          className="header__logo"
          loading="eager"
        />

        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li
                  className="header__menu-item"
                  key={index}
                >
                  <a
                    className={classNames('header__menu-link', {
                      'is-active': href === url
                    })}
                    href={getUrl(href)}
                  >
                    {label}
                  </a>
                </li>))}
            </ul>
          </nav>
        </dialog>
        <div className="header__wrapper">
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconSrc="/src/assets/sprite/search.svg"
              extraAttrs={{
                'data-js-search-menu-button': ''
              }}
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              mode="transparent"
              iconSrc="/src/assets/sprite/notifications.svg"
              extraAttrs={{
                'data-js-notifications-menu-button': ''
              }}
            />
          </div>
          <BurgerButton
            className="header__burger-button visible-tablet"
            extraAttrs={{
              'data-js-overlay-menu-burger-button': '',
            }}
          />
        </div>
      </div>
      <div
        className="header__search-menu-overlay"
        data-js-search-menu-overlay=""
      />
      <dialog
        className="header__search-menu-dialog search-menu"
        data-js-search-menu-dialog=""
      >
        <input
          className="search-menu__input"
          type="search"
          placeholder="Search titles"
          data-js-search-menu-input=""
        />
        <ul className="search-menu__list">
          {searchItems.map((searchItem, index) => (
            <li
              className={classNames("search-menu__item", {
                'is-active': index === 0
              })}
              key={index}
              data-js-search-menu-list-item=""
            >
              {searchItem}
            </li>
          ))}
        </ul>
        <div className="search-menu__result">
            <span className="search-menu__title">
              An advanced search for titles is available in the
            </span>&nbsp;
          <a
            className="search-menu__link"
            href={getUrl("/movies")}
            title="To Catalog"
          >catalog
          </a>
        </div>
      </dialog>
      <dialog
        className="header__notifications-menu-dialog notifications-menu"
        data-js-notifications-menu-dialog=""
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
      <ScrollToTopButton />
    </header>)
}

export default Header  