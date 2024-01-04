import { Link, useLocation } from 'react-router-dom';
import styles from './Page404.module.scss';

import { useEffect, useState } from 'react';
import Button from '@/components/main/Button/Button';

const Page404 = () => {
  const [href, setHref] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('admin')) {
      setHref('/admin');
    } else {
      setHref('/');
    }
  }, [pathname]);

  return (
    <div className={styles.NotFound}>
      <div className={styles.wrapper}>
        <div className="image">
          <img src="/404.svg" alt="page 404" />
        </div>
        <p>
          Cпокійно, все підконтролем, просто такої сторінки покищо не існує !
        </p>
        <Link to={href}>
          <Button>Повернутися на головну</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
