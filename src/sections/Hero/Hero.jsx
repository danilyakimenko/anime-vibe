import './Hero.scss'
import Button from '@/components/Button'
import { getUrl } from '@/utils/getUrl'
import Carousel from '@/sections/Carousel'

const Hero = () => {
  const titleId = 'hero-title'

  return (
    <section
      className="hero"
      aria-labelledby={titleId}
    >
      <Carousel />
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id={titleId}>
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            <p>AnimeVibe is the best streaming experience for watching your favorite anime movies and shows on demand, anytime, anywhere. With AnimeVibe, you can enjoy a wide variety of content, including the latest blockbusters, movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
          </div>
          <Button
            className="hero__button"
            iconSrc="/src/assets/sprite/play.svg"
            label="Start Watching Now"
            href={getUrl("/movies")}
            hasFillIcon
          />
        </div>
      </div>
    </section>
  )
}

export default Hero  