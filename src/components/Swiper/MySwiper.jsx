import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './MySwiper.module.scss';
import { useRef } from 'react';

import SliderArrowNext from '@/components/Icons/SliderArrowNext ';
import { formatDate } from '@/services/formatDate';
// import { useMediaQuery } from 'react-responsive';

const MySwiper = ({ feedbacks }) => {
  //   console.log('feedbacks: ', feedbacks);
  //   const isDesktop = useMediaQuery({ minWidth: 768 });
  //   const isMobile = useMediaQuery({ maxWidth: 767 });

  const swiperRef = useRef();

  return (
    <div className={styles.swiperwrapper}>
      <Swiper
        className={styles.slider}
        slidesPerView={1}
        loop={true}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1240: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {feedbacks.map(feedback => (
          <SwiperSlide key={feedback.id} className={styles.slide}>
            <div className={styles.feedBack_wrapper}>
              <div className={styles.feedBack_titleWrapper}>
                <p className={styles.feedBack_name}>{feedback.name}</p>
                <p className={styles.feedBack_date}>
                  {formatDate(feedback.date)}
                </p>
              </div>
              <div className={styles.feedBack_textWrapper}>
                <p>{feedback.body}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={styles.prevSlide}
        onClick={() => swiperRef.current.slidePrev()}
      >
        <SliderArrowNext />
      </button>
      <button
        className={styles.nextSlide}
        onClick={() => swiperRef.current.slideNext()}
      >
        <SliderArrowNext />
      </button>
    </div>
  );
};

export default MySwiper;
