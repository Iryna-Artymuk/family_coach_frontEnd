import Container from '@/components/Container/Container';

import PriceCardAdult from '@/components/PriceCards/PriceCardAdult';
import { priceDataAdult, priceDataKids } from '@/data/priceData';
import { useEffect, useState } from 'react';

import styles from './PricePage.module.scss';
import PriceCarKids from '@/components/PriceCards/PriceCardKids';
import IconMore from '@/components/Icons/IconMore';

const PricePage = () => {
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
    setShowVebinarPrice(!showVebinarPrice);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Container>
        <div className={styles.contentWrapper}>
          <h1 className="visuallyHidden">Ціна консультацій Жанни Барищук </h1>

          <div>
            <h2 className="title">Як відбувається консультація?</h2>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Онлайн по відеозв&apos;язку (Telegram, Viber, Skype, Zoom)
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  {' '}
                  Можливий текстовий формат (Telegram)
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  {' '}
                  Працюю в інтегрованому підході (КПТ, Арт Терапія, Психоаналіз)
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="title">
              З чого починається робота з психологом?
              <br /> Чому психолог не може допомогти за один сеанс?
            </h2>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Перша зустріч - це завжди знайомство. Підписання контракту,
                  встановлення правил На першій зустрічі клієнт озвучує свою
                  проблему - це те , що потрібно вирішувати, клієнт описує свою
                  ситуацію.
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Далі - друга зустріч, разом з психологом клієнт формує скаргу
                  - що хвилює клієнта, що не подобається, що клієнт хоче
                  змінити.
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  На наступній зустрічі клієнт разом з психологом формує “запит”
                  - те, що клієнт хотів би отримати від роботи з психологом.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="title">Як зрозуміти результат роботи?</h2>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Ви усвідомлюєте, що хочете в кожній сфері життя
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Ваші реакції на події змінились
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  {' '}
                  Конфлікти стали екологічними, зʼявився діалог
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Ви робите те, що раніше боялись
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="title">Вартість консультацій це:</h2>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Теорія (моє постійне навчання, підвищення кваліфікації)
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}> Інтервізії, супервізії</p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}>
                  Конфлікти стали екологічними, зʼявився діалог
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}> Просування</p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}> Досвід</p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_item_text}> Власна терапія</p>
              </li>
            </ul>
          </div>

          <div className={styles.buttonsWrapper}>
            <h2 className="title">Мої послуги</h2>
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

            {showVebinarPrice && <div> кошторис ще формується ... </div>}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricePage;
