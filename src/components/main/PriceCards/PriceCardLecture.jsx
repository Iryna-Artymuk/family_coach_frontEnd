import styles from './PriceCards.module.scss';

const PriceCardLecture = ({ priceData }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTitle}>{priceData.type}</div>

      <div className={styles.cardInfo}>
        <p>{priceData.theme}</p>

        <p className={styles.cardInfo_price}>{priceData.price}грн</p>
      </div>
    </div>
  );
};

export default PriceCardLecture;
