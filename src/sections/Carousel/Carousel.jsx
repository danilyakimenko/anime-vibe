import './Carousel.scss'
import { Image } from 'minista/assets'
import { getUrl } from '@/utils/getUrl'

const Carousel = () => {
  const carouselItems = [
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/1.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/2.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/3.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/4.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/5.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/6.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/7.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/8.jpg',
          href: '/movie'
        },
      ]
    },
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/9.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/10.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/11.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/12.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/13.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/14.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/15.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/16.jpg',
          href: '/movie'
        },
      ]
    },
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/17.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/18.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/19.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/20.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/21.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/22.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/23.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/24.jpg',
          href: '/movie'
        },
      ]
    },
    {
      items: [
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/25.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/26.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/27.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/28.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/29.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/30.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/31.jpg',
          href: '/movie'
        },
        {
          title: 'Watch now',
          imgSrc: '/src/assets/images/carousel/32.jpg',
          href: '/movie'
        },
      ]
    },
  ]

  return (
    <div
      className="carousel"
      onContextMenu={(event) => event.preventDefault()}
    >
      {/* Влево */}
      <div className="carousel__groups">
        <div className="carousel__group">
          {carouselItems[0].items.map(({ title, href, imgSrc }, index) => (
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

        <div className="carousel__group">
          {carouselItems[0].items.map(({ title, href, imgSrc }, index) => (
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
      </div>

      {/* Вправо */}
      <div className="carousel__groups carousel__groups--reverse">
        <div className="carousel__group">
          {carouselItems[1].items.map(({ title, href, imgSrc }, index) => (
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

        <div className="carousel__group">
          {carouselItems[1].items.map(({ title, href, imgSrc }, index) => (
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
      </div>

      {/* Влево */}
      <div className="carousel__groups">
        <div className="carousel__group">
          {carouselItems[2].items.map(({ title, href, imgSrc }, index) => (
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

        <div className="carousel__group">
          {carouselItems[2].items.map(({ title, href, imgSrc }, index) => (
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
      </div>
    </div>
  )
}

export default Carousel  