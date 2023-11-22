import styles from './PriceCards.module.scss';

const PriceCardAdult = ({ priceData }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTitle}>{priceData.type}</div>
      <div className={styles.cardInfoWrapper}>
        <div className={styles.cardInfo}>
          <p>{priceData.amount}</p>
          <p>Тривалість:{priceData.duration}хв</p>
          {priceData.period && <p>Термін дії:{priceData.period}днів</p>}
        </div>

        <p className={styles.cardInfo_price}>{priceData.price}грн</p>
      </div>
    </div>
  );
};

export default PriceCardAdult;
