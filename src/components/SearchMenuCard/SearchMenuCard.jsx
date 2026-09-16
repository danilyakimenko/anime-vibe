import './SearchMenuCard.scss'
import { getUrl } from '@/utils/getUrl'
import { Image } from 'minista/assets'

const SearchMenuCard = (props) => {
  const {
    title,
    description,
    imgSrc
  } = props

  return (
    <a
      className="search-menu-card"
      href={getUrl("/movie")}
    >
      <Image
        className="search-menu-card__image"
        src={imgSrc}
        alt=""
        width="150"
        height="150"
        loading="lazy"
      />
      <div className="search-menu-card__info">
        <h2 className="search-menu-card__title">{title}</h2>
        <div className="search-menu-card__description">
          <p>{description}</p>
        </div>
      </div>
    </a>
  )
}

export default SearchMenuCard  