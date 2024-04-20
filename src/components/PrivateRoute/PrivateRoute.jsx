import { useAuthorized } from '@/store/IsAuthorizedStore';
import useAuthStore from '@/store/authStore';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = 'admin/login' }) => {
  const isAuthorized = useAuthorized(state => state.isAuthorized);
  const currentUser = useAuthStore(state => state.currentUser);
  // Get the value of the key from local storage
  const value = localStorage.getItem('family_coach_access_token');
  const existsToken = value !== null;
  const existsUser = Object.keys(currentUser).length > 0;

  return isAuthorized || existsUser || existsToken ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
