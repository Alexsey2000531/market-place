import type { FC } from 'react'
import css from './index.module.css'
import type { FormikProps } from 'formik'

type InputProps = {
  name: string
  label?: string
  placeholder?: string
  type?: string
  maxWidth?: number
  formik: FormikProps<any>
}

const Input: FC<InputProps> = ({ name, label, placeholder, type = 'text', maxWidth, formik }) => {
  const value = formik.values[name]
  return (
    <div className={css['field']} style={{ marginBottom: 10 }}>
      <label className={css['label']} htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        className={css['input']}
        style={{ maxWidth }}
        placeholder={placeholder}
        onChange={(event) => {
          void formik.setFieldValue(name, event.target.value)
        }}
        type={type}
        name={name}
        id={name}
      />
    </div>
  )
}

export default Input
