import './MovieBannerCard.scss'
import '@/components/EpisodeCard/EpisodeCard.scss'
import { Image } from 'minista/assets'
import Button from '@/components/Button'
import classNames from 'classnames'
import { getUrl } from '@/utils/getUrl'
import Icon from '@/components/Icon'

const MovieBannerCard = (props) => {
  const {
    title,
    titleId,
    TitleTag = 'h2',
    description,
    imgSrc,
    isSmallPaddingY = false,
    href = "/movie",
    video,
    poster,
    isNegativeZIndex,
  } = props

  const playButtonTitle = 'Play video'

  return (
    <div className="movie-banner-card">
      {!video && (
        <Image
          className="movie-banner-card__image"
          src={imgSrc}
        />
      )}
      {video && (
        <div
          className="episode-card__player"
          data-js-video-player=""
        >
          <video
            className="movie-banner-card__video"
            src={video}
            poster={poster}
            width="1600"
            height="837"
            data-js-video-player-video=""
          />
          <button
            className="episode-card__play-button is-active"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}
            data-js-video-player-play-button=""
          >
            <Icon
              className="episode-card__play-button-icon"
              src="/src/assets/sprite/play-circle.svg"
            />
          </button>
        </div>
      )}
      <div
        className={classNames('movie-banner-card__inner', {
          'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
          'movie-banner-card__inner--negative-z-index': isNegativeZIndex,
        })}
      >
        {!video && (
          <>
            <div className="movie-banner-card__body">
              <TitleTag
                className="movie-banner-card__title h3"
                id={titleId}
              >
                {title}
              </TitleTag>
              <div className="movie-banner-card__description hidden-mobile">
                <p>{description}</p>
              </div>
            </div>
            <footer className="movie-banner-card__footer">
              <Button
                className="movie-banner-card__play-button"
                iconSrc="/src/assets/sprite/play.svg"
                href={getUrl(href)}
                label="Watch"
                hasFillIcon
              />
              <div className="movie-banner-card__actions">
                <Button
                  iconSrc="/src/assets/sprite/plus.svg"
                  label="Add to playlist"
                  isLabelHidden
                  mode="black-06"
                />
                <Button
                  iconSrc="/src/assets/sprite/like.svg"
                  label="Like"
                  isLabelHidden
                  mode="black-06"
                />
                <Button
                  iconSrc="/src/assets/sprite/volume.svg"
                  label="Mute"
                  isLabelHidden
                  mode="black-06"
                />
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  )
}

export default MovieBannerCard  