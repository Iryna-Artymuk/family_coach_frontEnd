import { useAuthorized } from '@/store/IsAuthorizedStore';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = 'admin/login' }) => {
  const isAuthorized = useAuthorized(state => state.isAuthorized);
  console.log('isAuthorized : ', isAuthorized);
  console.log('children}: ', children);

  return isAuthorized ? <>{children}</> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
