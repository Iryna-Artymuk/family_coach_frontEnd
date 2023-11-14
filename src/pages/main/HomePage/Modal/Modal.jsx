import { useEffect } from 'react';
import styles from './Modal.module.scss';
import CloseIcon from '@/components/Icons/CloseIcon';
import Button from '@/components/Button/Button';
import clsx from 'clsx';
const Modal = ({ closeModal, children, type }) => {
  const closeOnBackdropClick = event => {
    if (event.target === event.currentTarget) closeModal();
  };

  useEffect(() => {
    const handleEscKeyDown = event => {
      if (event.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={styles.Overlay} onClick={closeOnBackdropClick}>
      <div
        className={clsx(
          styles.modal,
          type === 'modal' && styles.regularModal,
          type === 'thanksModal' && styles.thanksModal
        )}
      >
        {children}

        <Button burgerMenuCloseButton onClick={closeModal} aria-label="close">
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};

export default Modal;
