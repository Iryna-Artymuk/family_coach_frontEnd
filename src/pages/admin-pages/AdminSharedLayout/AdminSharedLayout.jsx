import { Suspense, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import styles from './AdminSharedLayout.module.scss';

import Sidebar from '@/components/admin/Sidebar/Sidebar';
import AdminHeader from '@/components/admin/AdminHeader/AdminHeader';
import useAuthStore from '@/store/authStore';
import Spinner from '@/ui/Spinner/Spinner';
import { useAuthorized } from '@/store/IsAuthorizedStore';

const AdminSharedLayout = () => {
  const { getCurrentUser, error } = useAuthStore();
  const { setUnAuthorized } = useAuthorized();
  const loading = useAuthStore(state => state.loading);
  const currentUser = useAuthStore(state => state.currentUser);

  const navigate = useNavigate();
  // Get the value of the key from local storage
  const value = localStorage.getItem('family_coach_access_token');
  const exists = value !== null;
  // Check if the value is not null

  console.log('error: ', error);
  if (error) {
    <Navigate to="/admin/login" replace />;
  }
  useEffect(() => {
    try {
      getCurrentUser();
      if (!exists) {
        setUnAuthorized();
        <Navigate to="/admin/login" replace />;
      }
    } catch (error) {
      <Navigate to="/admin/login" replace />;
      console.log(error);
    }
  }, [getCurrentUser, exists, navigate, setUnAuthorized]);
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
