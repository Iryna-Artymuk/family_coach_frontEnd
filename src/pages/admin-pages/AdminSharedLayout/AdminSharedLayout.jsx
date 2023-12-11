import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AdminSharedLayout.module.scss';

import Sidebar from '@/components/admin/Sidebar/Sidebar';
import AdminHeader from '@/components/admin/AdminHeader/AdminHeader';

const AdminSharedLayout = () => {
  return (
    <main className={styles.mainWrapper}>
      <AdminHeader />
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
