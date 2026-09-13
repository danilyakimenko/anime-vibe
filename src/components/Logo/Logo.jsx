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
        src="/src/assets/images/logo.svg"
        alt=""
        width="199"
        height="60"
        loading={loading}
      />
    </a>
  )
}

export default Logo  