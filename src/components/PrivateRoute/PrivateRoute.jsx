import { useAuthorized } from '@/store/IsAuthorizedStore';
import useAuthStore from '@/store/authStore';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// const PrivateRoute = ({ children, redirectTo = 'admin/login' }) => {
//   const isAuthorized = useAuthorized(state => state.isAuthorized);

//   return isAuthorized ? <>{children}</> : <Navigate to={redirectTo} replace />;
// };

// export default PrivateRoute;

const PrivateRoute = ({ children, redirectTo = 'admin/login' }) => {
  const { getCurrentUser } = useAuthStore();
  const isAuthorized = useAuthorized(state => state.isAuthorized);

  const currentUser = useAuthStore(state => state.currentUser);
  const existUser = Object.keys(currentUser).length > 0;
  
  useEffect(() => {
    try {
      getCurrentUser();
    } catch (error) {
      console.log(error);
    }
  }, [getCurrentUser]);

  return isAuthorized && existUser ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
