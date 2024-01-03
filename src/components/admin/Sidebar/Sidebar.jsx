import SideBarMenuList from '../Sidebar/SideBarMenuList/SideBarMenuList';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContent}>
        <SideBarMenuList />
      </div>
    </div>
  );
};

export default Sidebar;
