import { FC } from 'react';
import styles from './modal.module.css';
import { IModalProps } from './modal.props';

const Modal: FC<IModalProps> = ({ children, onClose, ...props }) => (
  <div className={styles.modal__wrapper}>
    <div className={styles.modal} {...props}>
      <button type="button" className={styles.modal__closeBtn} onClick={onClose}>X</button>
      {children}
    </div>
    <div role="none" onClick={onClose} className={styles.modal__overlay} />
  </div>
);

export default Modal;
