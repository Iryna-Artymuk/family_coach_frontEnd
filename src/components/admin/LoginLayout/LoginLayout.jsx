import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


import styles from './LoginLayout.module.scss';
import Container from '@/components/main/Container/Container';

export const LoginLayout = () => {
  return (
    <div className={styles.backgroundContainer}>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default LoginLayout;
