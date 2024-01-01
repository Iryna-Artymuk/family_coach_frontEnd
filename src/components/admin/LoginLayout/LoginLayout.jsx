import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './LoginLayout.module.scss';

export const LoginLayout = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default LoginLayout;
