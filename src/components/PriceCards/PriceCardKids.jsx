import styles from './PriceCards.module.scss';
const PriceCarKids = ({ priceData }) => {
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

        <div className={styles.singleConsultationInfo}>
          <p className={styles.singleConsultationTitle}>
            {priceData.singleConsultation.type}
          </p>
          <p className={styles.singleConsultationDuration}>
            Тривалість:{priceData.singleConsultation.duration}хв
          </p>
          <p className={styles.singleConsultationPrice}>
            {priceData.singleConsultation.price}грн
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCarKids;
