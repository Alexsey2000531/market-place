import type { FC } from 'react'
import css from './index.module.css'

type DropdownPanelProps = {
  onClick: () => void
}

const UserAvatar: FC<DropdownPanelProps> = (props) => {
  return (
    <div className={css.AvatarWrapper} onClick={props.onClick}>
      <img src="https://i.pravatar.cc/46" alt="Аватарка пользователя" />
    </div>
  )
}

export default UserAvatar
