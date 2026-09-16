import './MovieBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard'

const MovieBanner = (props) => {
  const {
    video,
    poster,
    isNegativeZIndex,
  } = props

  const titleId = 'movie-banner-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title="Chainsaw Man"
        titleId={titleId}
        TitleTag="h1"
        description="An orphan in debt becomes a desperate fighter against demons. A bloody anime based on one of the most popular manga."
        imgSrc="/src/assets/images/movie-banner/1.webp"
        video={video}
        poster={poster}
        isSmallPaddingY
        isNegativeZIndex={isNegativeZIndex}
      />
    </section>
  )
}

export default MovieBanner  