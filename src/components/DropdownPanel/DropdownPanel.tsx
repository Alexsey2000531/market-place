import { useCallback, useRef, useState, type FC } from 'react'
import type React from 'react'
import css from './index.module.css'
import useOnClickOutside from '../../helpers/hooks'

type DropdownPanel = {
  toggler: any
  children: React.ReactNode
}

const DropdownPanel: FC<DropdownPanel> = ({ toggler, children }) => {
  const dropdownWrapperRef = useRef(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = useCallback(() => {
    setIsVisible((isVisible) => !isVisible)
  }, [])

  useOnClickOutside(dropdownWrapperRef, toggleVisibility)

  const Toggler = toggler

  return (
    <div className={css.wrapper}>
      <Toggler onClick={toggleVisibility} />

      {isVisible && (
        <div className={css.DropdownWrapper} ref={dropdownWrapperRef}>
          {children}
        </div>
      )}
    </div>
  )
}

export default DropdownPanel
