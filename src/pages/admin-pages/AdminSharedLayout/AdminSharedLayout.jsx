import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AdminSharedLayout.module.scss';

import Sidebar from '@/components/admin/Sidebar/Sidebar';
import AdminHeader from '@/components/admin/AdminHeader/AdminHeader';
import useAuthStore from '@/store/authStore';
import Spinner from '@/ui/Spinner/Spinner';

const AdminSharedLayout = () => {
  const { getCurrentUser } = useAuthStore();
  const currentUser = useAuthStore(state => state.currentUser);

  const loading = useAuthStore(state => state.loading);

  useEffect(() => {
    try {
      getCurrentUser();
    } catch (error) {
      console.log(error);
    }
  }, [getCurrentUser]);
  return (
    <>
      <main className={styles.mainWrapper}>
        <AdminHeader currentUser={currentUser} />
        <div className={styles.adminBackdrop}>
          <Sidebar />
          {!loading ? (
            <Suspense fallback={<div>Loading...</div>}>
              <div className={styles.rightContent}>
                <Outlet />
              </div>
            </Suspense>
          ) : (
            <Spinner />
          )}
        </div>
      </main>
    </>
  );
};

export default AdminSharedLayout;
