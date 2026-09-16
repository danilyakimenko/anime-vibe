import './SearchMenu.scss'
import classNames from 'classnames'
import searchItems from '@/layouts/Header/items/searchItems'
import movieCards from '@/sections/MoviesBanner/items/movieCards'
import SearchMenuCard from '@/components/SearchMenuCard'

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
            className={classNames('search-menu__item', {
              'is-active': index === 0,
            })}
            key={index}
            data-js-search-menu-list-item=""
          >
            {searchItem}
          </li>
        ))}
      </ul>

      <div
        className="search-menu__result"
        data-js-search-menu-result=""
      >
        {movieCards.map((movieCard, index) => (
          <div
            className="search-menu__card"
            data-js-search-menu-card=""
            data-title={movieCard.title}
            key={index}
          >
            <SearchMenuCard {...movieCard} />
          </div>
        ))}
      </div>
    </dialog>
  )
}

export default SearchMenu