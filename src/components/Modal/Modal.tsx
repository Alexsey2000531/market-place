import { useRef, type FC } from 'react'
import css from './index.module.css'
import useOnClickOutside from '../../helpers/hooks'

type IModalProps = {
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<IModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(modalRef, onClose)

  if (!isOpen) {
    return null
  }

  return (
    <div className={css.modal}>
      <div ref={modalRef} className={css.modalContent}>
        <h2>Спасибо за покупку!</h2>
        <p>Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время.</p>
        <button onClick={onClose} className={css.closeButton}>
          Закрыть
        </button>
      </div>
    </div>
  )
}

export default Modal
