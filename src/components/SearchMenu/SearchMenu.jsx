import './SearchMenu.scss'
import classNames from 'classnames'
import searchItems from '@/layouts/Header/items/searchItems'
import { getUrl } from '@/utils/getUrl'

const SearchMenu = (props) => {
  const {
    extraAttrs,
  } = props

  return (
    <dialog
      className="search-menu"
      {...extraAttrs}
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
  )
}

export default SearchMenu  