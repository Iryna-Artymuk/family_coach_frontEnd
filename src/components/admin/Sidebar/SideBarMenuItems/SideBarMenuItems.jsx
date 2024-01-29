import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './SideBarMenuItems.module.scss';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';
const SideBarMenuItems = ({ title, link, iconClass, subMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) => `${styles.sidebarMenuItem} 
       ${isActive ? styles.sidebarMenuItem_active : ''}`}
        onClick={() => {
          subMenu && setIsOpen(!isOpen);
        }}
      >
        <svg>
          <use href={`${sprite}#${iconClass}`} />
        </svg>
        {title}
      </NavLink>
      {subMenu && isOpen && (
        <div className={styles.subMenuList}>
          {subMenu.map((subMenuItem, index) => (
            <NavLink
              key={index}
              to={subMenuItem.link}
              className={({ isActive }) => `${styles.subMenuItem} 
       ${isActive ? styles.subMenuItem_active : ''}`}
            >
              {subMenuItem.title}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarMenuItems;
