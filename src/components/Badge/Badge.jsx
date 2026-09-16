import './Badge.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

const Badge = (props) => {
  const {
    className,
    /**
     * '' (default) | 'accent'
     */
    mode = '',
    isBig = false,
    iconSrc,
    iconAriaLabel,
    hasFillIcon,
    children
  } = props

  return (
    <div
      className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
        [`badge--big`]: isBig,
      })}
    >
      {iconSrc && (
        <Icon
          className="badge__icon"
          src={iconSrc}
          hasFill={hasFillIcon}
          ariaLabel={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}

export default Badge  