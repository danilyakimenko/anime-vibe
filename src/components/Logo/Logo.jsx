import './Logo.scss'
import classNames from 'classnames'
import { getUrl } from '@/utils/getUrl'

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
  } = props
  const title = 'Home'

  return (
    <a
      className={classNames(className, 'logo')}
      href={getUrl("/")}
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/src/assets/images/logo/logo.svg"
        width="199"
        height="60"
        loading={loading}
        alt=""
      />
      <span className="logo__title">
        AnimeVibe
      </span>
    </a>
  )
}

export default Logo  