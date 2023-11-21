import styles from './SocialList.module.scss';

import Instagram from '../Icons/Instagram';
import Telegram from '../Icons/Telegram';
import Phone from '../Icons/Phone';

const SocialList = () => {
  return (
    <ul className={styles.socialList}>
      <li>
        <a href="tel:+380672570144">
          <Phone />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/your_familycoach/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/your_familycoach"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Telegram />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
