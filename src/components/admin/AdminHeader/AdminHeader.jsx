import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './AdminHeader.module.scss';
import useAuthStore from '@/store/authStore';
import { useAuthorized } from '@/store/IsAuthorizedStore';
import { toast } from 'react-toastify';
import { checkAndRemoveKey } from '@/helpers/removeKey';
const AdminHeader = ({ currentUser }) => {
  const { setUnAuthorized } = useAuthorized();
  const { logout } = useAuthStore();

  const handelLogout = async () => {
    const responce = await logout();

    if (responce?.data.status === 'success') {
      checkAndRemoveKey('family_coach_access_token');
      setUnAuthorized();
      toast.success( 'До побачення ' );
      
    } else if (responce?.data.status === 'error') {
      toast.error(`Помилка  ${responce?.data.message}`);
    } else {
      toast.error(`Сталась помилка, технічна підтримка 0666796604`);
    }
  };
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <svg className={styles.logo}>
          <use href={`${sprite}#${'icon-logo'}`} />
        </svg>
        <div className={styles.userInfoWrapper}>
          <div className={styles.userInfo}>
            <p>Вітаю,{currentUser?.name}</p>
            <img src={currentUser?.avatar?.url} alt="" />
          </div>

          <button onClick={handelLogout} className={styles.headerButton}>
            Вихід
            <svg>
              <use href={`${sprite}#${'icon-logout'}`} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
