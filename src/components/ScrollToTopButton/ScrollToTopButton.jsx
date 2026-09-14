import './ScrollToTopButton.scss'


const ScrollToTopButton = () => {
  return (
    <a
      className="scroll-to-top-button hidden-mobile"
      href="#"
      data-js-scroll-to-top-button=""
    >
      <img src="/src/assets/sprite/arrow-up.svg" alt=""/>
    </a>
  )
}

export default ScrollToTopButton  