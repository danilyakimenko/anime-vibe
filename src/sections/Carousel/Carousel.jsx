import './Carousel.scss'
import { Image } from 'minista/assets'
import { getUrl } from '@/utils/getUrl'
import carouselItems from '@/sections/Carousel/items/carouselItems'

const Carousel = () => {
  return (
    <div className="carousel">
      {carouselItems.map(({ items }, index) => (
        <div
          className={`carousel__groups${index % 2 ? ' carousel__groups--reverse' : ''}`}
          key={index}
        >
          {[1, 2].map((group) => (
            <div className="carousel__group" key={group}>
              {items.map(({ title, href, imgSrc }, index) => (
                <a
                  className="carousel__card"
                  href={getUrl(href)}
                  title={title}
                  key={index}
                >
                  <Image
                    className="carousel__image"
                    src={imgSrc}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Carousel