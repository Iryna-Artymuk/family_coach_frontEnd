import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AdminSharedLayout.module.scss';

import Sidebar from '@/components/admin/Sidebar/Sidebar';
import AdminHeader from '@/components/admin/AdminHeader/AdminHeader';
import useAuthStore from '@/store/authStore';

const AdminSharedLayout = () => {
  const { getCurrentUser } = useAuthStore();
  const currentUser = useAuthStore(state => state.currentUser);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <main className={styles.mainWrapper}>
      <AdminHeader currentUser={currentUser} />
      <div className={styles.adminBackdrop}>
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.rightContent}>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default AdminSharedLayout;
