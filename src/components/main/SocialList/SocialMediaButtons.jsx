// import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  ViberShareButton,
  ViberIcon,
} from 'react-share';
import styles from './SocialList.module.scss';
const SocialMediaButtons = ({ url, title, hashtag }) => {
  console.log(' title : ', title);
  return (
    <div className={styles.shareList}>
      Поділитись
      <div className={styles.socialList}>
        <FacebookShareButton
          url={url}
          quotes={'сімейний психолог Жанна Барищук'}
          hashtag={hashtag}
        >
          <FacebookIcon size={24} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>
        <ViberShareButton url={url} title={title} separator=":: ">
          <ViberIcon size={24} round={true} />
        </ViberShareButton>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
