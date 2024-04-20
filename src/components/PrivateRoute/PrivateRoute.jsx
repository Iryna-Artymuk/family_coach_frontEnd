import { useAuthorized } from '@/store/IsAuthorizedStore';
import useAuthStore from '@/store/authStore';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = 'admin/login' }) => {
  const isAuthorized = useAuthorized(state => state.isAuthorized);
  const { error } = useAuthStore();
  console.log(' currentUserError : ', error);
  // Get the value of the key from local storage
  const value = localStorage.getItem('family_coach_access_token');
  const existsToken = value !== null;
  // Check if the value is not null
  return isAuthorized || !error || existsToken ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
