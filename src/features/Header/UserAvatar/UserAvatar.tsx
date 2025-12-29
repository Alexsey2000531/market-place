import type { FC } from 'react'
import css from './index.module.css'
import cn from 'classnames'
import avatar from '../img/avatar.png'

type AvatarSize = 'big' | 'small'

type DropdownPanelProps = {
  onClick?: () => void
  size: AvatarSize
}

const UserAvatar: FC<DropdownPanelProps> = (props) => {
  return (
    <div
      className={cn(css['AvatarWrapper'], {
        [css['avatarBig']]: props.size === 'big',
        [css['avatarSmall']]: props.size === 'small',
      })}
      onClick={props.onClick}
    >
      <img src={avatar} alt="Аватарка пользователя" />
    </div>
  )
}

export default UserAvatar
