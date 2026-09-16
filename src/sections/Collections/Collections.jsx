import './Collections.scss'
import Tabs from '@/components/Tabs'
import getIdFromTitle from '@/utils/getIdFromTitle'
import Section from '@/layouts/Sections'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Slider from '@/components/Slider'
import CategoryCard from '@/components/CategoryCard'
import MovieCard from '@/components/MovieCard'
import collectionItems from './items/collectionItems'

const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionItems.map((collectionItems) => ({
        isActive: collectionItems.isActive,
        title: collectionItems.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionItems.title}
            </p>
            {collectionItems.items.map((collectionItem, index) => {
              const {
                title,
                categoryItems,
                movieItems,
                sliderParams,
              } = collectionItem

              const titleFormatted = `${getIdFromTitle(collectionItems.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormatted}-title`
              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={(
                    <SliderNavigation
                      id={sliderNavigationId}
                      mode="tile"
                    />
                  )}
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                  >
                    {categoryItems?.map((categoryItem, index) => (
                      <CategoryCard
                        {...categoryItem}
                        key={index}
                      />
                    )) ?? movieItems?.map((movieItem, index) => (
                      <MovieCard
                        {...movieItem}
                        key={index}
                      />
                    ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        )
      }))}
    />
  )
}

export default Collections  