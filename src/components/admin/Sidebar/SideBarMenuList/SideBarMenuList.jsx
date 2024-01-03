import { sideBarList } from '../../../../constants/sideBarList';

import SideBarMenuItems from '../SideBarMenuItems/SideBarMenuItems';
import styles from './SideBarMenuList.module.scss';

const SideBarMenuList = () => {
  return (
    <div className={styles.sidebarMenuList}>
      {sideBarList.map((item, index) => (
        <SideBarMenuItems
          key={index}
          title={item.title}
          link={item.link}
          iconClass={item.iconClass}
          subMenu={item.subMenu}
        />
      ))}
    </div>
  );
};

export default SideBarMenuList;
