import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './AdminHeader.module.scss';
const AdminHeader = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <svg className={styles.logo}>
          <use href={`${sprite}#${'icon-logo'}`} />
        </svg>
        <button className={styles.headerButton}>
          Вихід
          <svg>
            <use href={`${sprite}#${'icon-logout'}`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
