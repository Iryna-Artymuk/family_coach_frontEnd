import Container from '@/components/Container/Container';
import ArrowBack from '@/components/Icons/ArrowBack';
import PriceCardAdult from '@/components/PriceCards/PriceCardAdult';
import { priceDataAdult, priceDataKids } from '@/data/priceData';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './PricePage.module.scss';
import PriceCarKids from '@/components/PriceCards/PriceCardKids';
import IconMore from '@/components/Icons/IconMore';

const PricePage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [showAdultPrice, setShowAdultPrice] = useState(false);
  const [showKidsPrice, setShowKidsPrice] = useState(false);
  const [showVebinarPrice, setShowVebinarPrice] = useState(false);

  const toggleShowAdultPrice = () => {
    setShowAdultPrice(!showAdultPrice);
    setShowKidsPrice(false);
    setShowVebinarPrice(false);
  };
  const toggleShowKidsPrice = () => {
    setShowAdultPrice(false);
    setShowKidsPrice(!showKidsPrice);
    setShowVebinarPrice(false);
  };
  const toggleShowVebinarPrice = () => {
    setShowAdultPrice(false);
    setShowKidsPrice(false);
    setShowVebinarPrice(!showVebinarPric);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <h1 className="visuallyHidden">Ціна консультацій Жанни Барищук </h1>

      <div className={styles.buttonsWrapper}>
        <button
          onClick={toggleShowAdultPrice}
          className={styles.showPriceButton}
        >
          Консультації для дорослих
          <IconMore />
        </button>

        {showAdultPrice && (
          <ul className={styles.priceList}>
            {priceDataAdult.map(priceData => (
              <li key={priceData.id}>
                <PriceCardAdult priceData={priceData} />
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={toggleShowKidsPrice}
          className={styles.showPriceButton}
        >
          Консультації для дітей та підлітків <IconMore />
        </button>

        {showKidsPrice && (
          <ul className={styles.priceList}>
            {priceDataKids.map(priceData => (
              <li key={priceData.id}>
                <PriceCarKids priceData={priceData} />
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={toggleShowVebinarPrice}
          className={styles.showPriceButton}
        >
          Лекції та вебінари <IconMore />
        </button>

        {showVebinarPrice && <div>ціна на вебінари </div>}
      </div>
    </Container>
  );
};

export default PricePage;
