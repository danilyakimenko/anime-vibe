import './MovieCard.scss'
import { Image } from 'minista/assets'
import Badge from '@/components/Badge'
import RatingView from '@/components/RatingView'
import { getUrl } from '@/utils/getUrl'

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    released,
    rating,
    season,
    href = '/movie',
  } = props

  return (
    <a
      className="movie-card"
      href={getUrl(href)}
      title={`Watch ${title}`}
    >
      <h3 className="movie-card__title h6">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconSrc="/src/assets/sprite/clock.svg"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}
        {season && (
          <Badge
            iconSrc="/src/assets/sprite/season.svg"
            hasFillIcon
          >
            {season}
          </Badge>
        )}
        {rating && (
          <Badge className="movie-card__rating-badge">
            <RatingView {...rating} />
          </Badge>
        )}
        {views && (
          <Badge
            iconSrc="/src/assets/sprite/eye.svg"
            iconAriaLabel="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}
        {released && (
          <Badge
            className="movie-card__released-badge"
            isBig
          >
            Released at&nbsp;
            <time
              className="movie-card__released-badge-label"
              dateTime={released.dateTime}
            >
              {released.label}
            </time>
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard