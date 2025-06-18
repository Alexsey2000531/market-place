import type { FC, ReactNode } from 'react'
import css from './index.module.css'
import cn from 'classnames'

type ButtonColor = 'red' | 'blue' | 'green'

type ButtonProps = {
  type?: 'submit' | 'button'
  children: ReactNode
  color: ButtonColor
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ type = 'submit', children, disabled, color }) => {
  return (
    <button
      className={cn({
        [css['button']]: true,
        [css[`color-${color}`]]: true,
      })}
      type={type}
      disabled={disabled}
    >
      <span className={css['text']}>{children}</span>
    </button>
  )
}

export default Button
