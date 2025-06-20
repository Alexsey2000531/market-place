import type { FC, ReactNode } from 'react'
import css from './index.module.css'
import cn from 'classnames'

type ButtonColor = 'red' | 'blue' | 'green'
type ButtonSize = 'small' | 'big'

type ButtonProps = {
  type?: 'submit' | 'button'
  children: ReactNode
  color: ButtonColor
  size?: ButtonSize
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ type = 'submit', children, disabled, color, size = 'big' }) => {
  return (
    <button
      className={cn({
        [css['button']]: true,
        [css[`color-${color}`]]: true,
        [css['small']]: size === 'small',
        [css['big']]: size === 'big',
      })}
      type={type}
      disabled={disabled}
    >
      <span className={css['text']}>{children}</span>
    </button>
  )
}

export default Button
