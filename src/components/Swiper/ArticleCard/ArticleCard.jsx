import { Cloudinary } from '@cloudinary/url-gen';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react';
import { Link } from 'react-router-dom';
import styles from '../ArticleCard/ArticleCard.module.scss';
import Arrow from '@/components/Icons/Main/Arrow';

const ArticleCard = ({ article }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dmzxbkd8p',
    },
  });
  return (
    <div className={styles.articleWrapper}>
      <div className={styles.articleContentWrapper}>
        <AdvancedImage
          className={styles.articleImg}
          cldImg={cld
            .image(article.postImage.public_id)

            .roundCorners(byRadius(15))}
          plugins={
            ([
              lazyload({
                rootMargin: '10px 20px 10px 30px',
                threshold: 0.25,
              }),
            ],
            [responsive({ steps: 100 })],
            [placeholder({ mode: 'blur' })])
          }
        />
        <div>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          <p className={styles.articleDescription}>{article.description}</p>
        </div>
        <Link className={styles.articleLink} to={`/blog/${article._id}`}>
          читати далі <Arrow />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
