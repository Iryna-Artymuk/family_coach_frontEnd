import { formatDate } from '@/helpers/formatDate';
import styles from './FeedbackCard.module.scss';

const FeedbackCard = ({ feedback }) => {
  return (
    <div className={styles.feedBack_wrapper}>
      <div className={styles.feedBack_titleWrapper}>
        <p className={styles.feedBack_name}>{feedback.name}</p>
        <p className={styles.feedBack_date}>{formatDate(feedback.createdAt)}</p>
      </div>
      <div className={styles.feedBack_textWrapper}>
        <p>{feedback.feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
