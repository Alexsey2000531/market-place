import type { FC, ReactNode } from 'react'
import css from './index.module.css'

type FormItemProps = {
  children: ReactNode
}

const FormItems: FC<FormItemProps> = ({ children }) => {
  return <div className={css['formItems']}>{children}</div>
}

export default FormItems
