import { FC } from 'react';
import styles from './modal.module.css';
import { IModalProps } from './modal.props';

const Modal: FC<IModalProps> = ({ children, onClose }) => (
  <div className={styles.modal__wrapper}>
    <div className={styles.modal}>
      <button type="button" className={styles.modal__closeBtn} onClick={onClose}>X</button>
      {children}
    </div>
    <div role="none" onClick={onClose} className={styles.modal__wrapper} />
  </div>
);

export default Modal;
