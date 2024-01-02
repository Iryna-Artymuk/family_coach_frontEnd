import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './AdminHeader.module.scss';
import useAuthStore from '@/store/authStore';
import { useAuthorized } from '@/store/IsAuthorizedStore';
import { toast } from 'react-toastify';
const AdminHeader = () => {
  const { setUnAuthorized } = useAuthorized();
  const { logout } = useAuthStore();
  const checkAndRemoveKey = key => {
    // Get the value of the key from local storage
    const value = localStorage.getItem(key);
    // Check if the value is not null
    const exists = value !== null;
    // If the key exists, remove it
    if (exists) {
      localStorage.removeItem(key);
    }
  };
  const handelLogout = async () => {
    const responce = await logout();
    console.log('responce: ', responce);
    if (responce?.data.status === 'success') {
      checkAndRemoveKey('family_coach_access_token');
      setUnAuthorized();
      toast.success('До побачення ');
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
        <button onClick={handelLogout} className={styles.headerButton}>
          Вихід
          <svg>
            <use href={`${sprite}#${'icon-logout'}`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
