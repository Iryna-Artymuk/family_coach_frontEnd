import Phone from '@/components/Icons/Main/Phone';
import styles from './SocialList.module.scss';
import Instagram from '@/components/Icons/Main/Instagram';
import Telegram from '@/components/Icons/Main/Telegram';
import SocialMediaButtons from '@/components/main/SocialList/SocialMediaButtons';

const SocialList = () => {
  return (
    <>
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
      {/*      
    <SocialMediaButtons url="https://family-coach.vercel.app/" /> */}
    </>
  );
};

export default SocialList;
