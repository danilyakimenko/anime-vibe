import MovieBanner from '@/sections/MovieBanner'
import MovieDetails from '@/sections/MovieDetails'
import Seasons from '@/components/Seasons'
import videoSrc from '@/assets/videos/placeholder.mp4'
import posterSrc from '@/assets/images/posters/1.jpg'

export const metadata = {
  title: 'Chainsaw Man',
}

export default () => {
  return (
    <>
      <MovieBanner
        video={videoSrc}
        poster={posterSrc}
        isNegativeZIndex
      />
      <MovieDetails
        seasons={<Seasons />}/>
    </>
  )
}
