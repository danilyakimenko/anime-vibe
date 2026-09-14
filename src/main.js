import Preloader from '@/modules/Preloader'
import OverlayMenu from '@/modules/OverlayMenu'
import SliderCollection from '@/modules/SliderCollection'
import TabsCollection from '@/modules/TabsCollection'
import VideoPlayerCollection from '@/modules/VideoPlayerCollection'
import InputMaskCollection from '@/modules/InputMaskCollection'
import SelectCollection from '@/modules/SelectCollection'

// Запуск прелоадера только на главной странице
if (window.location.pathname === '/') {
  new Preloader()
}
new OverlayMenu()
new SliderCollection()
new TabsCollection()
new VideoPlayerCollection()
new InputMaskCollection()
new SelectCollection()