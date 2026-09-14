import './Header.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import menuItems from './Items/menuItems'
import { getUrl } from '@/utils/getUrl'
import ScrollToTopButton from '@/components/ScrollToTopButton'

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
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconSrc="/src/assets/sprite/search.svg"
            />
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconSrc="/src/assets/sprite/notifications.svg"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
      <ScrollToTopButton />
    </header>)
}

export default Header  