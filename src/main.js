import Preloader from '@/modules/Preloader'
import OverlayMenu from '@/modules/OverlayMenu'
import SearchMenu from '@/modules/SearchMenu'
import ScrollToTopButton from '@/modules/ScrollToTopButton'
import SliderCollection from '@/modules/SliderCollection'
import TabsCollection from '@/modules/TabsCollection'
import VideoPlayerCollection from '@/modules/VideoPlayerCollection'
import InputMaskCollection from '@/modules/InputMaskCollection'
import SelectCollection from '@/modules/SelectCollection'

// Запуск прелоадера только на главной странице
if (window.location.pathname === '/' || '/anime-vibe/') {
  new Preloader()
}
new OverlayMenu()
new SearchMenu()
new ScrollToTopButton()
new SliderCollection()
new TabsCollection()
new VideoPlayerCollection()
new InputMaskCollection()
new SelectCollection()