import { Link } from 'react-router-dom';
import styles from '../ArticleCard/ArticleCard.module.scss';
import Arrow from '@/components/Icons/Arrow';
const ArticleCard = ({ article }) => {
  return (
    <div className={styles.articleWrapper}>
      <div className={styles.articleContentWrapper}>
        <img className={styles.articleImg} src={article.url} alt="" />
        <div>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          <p className={styles.articleText}>{article.body.slice(0, 160)}...</p>
        </div>
      </div>

      <Link className={styles.articleLink} to={`/blog/${article.id}`}>
        читати далі <Arrow />
      </Link>
    </div>
  );
};

export default ArticleCard;
