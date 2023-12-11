import SideBarMenuList from '../Sidebar/SideBarMenuList/SideBarMenuList';
import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContent}>
        <SideBarMenuList />
      </div>

      <div className={styles.sideBarFooter}>
        <div className={styles.acount}>
          <svg>
            <use href={`${sprite}#${'icon-person'}`} />
          </svg>
          <span> Акаунт</span>
        </div>

        <div className={styles.copyright}>
          <span>&#169; 2023 Жанна Барищук - всі права захищено </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
