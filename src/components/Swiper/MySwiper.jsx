// import Swiper JS
import { useRef, useState } from 'react';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { useSwiper } from 'swiper/react';

// export function MySwiper(props) {
//   const swiperRef = useRef();
//   const prevRef = useRef < HTMLDivElement > null;
//   const nextRef = useRef < HTMLDivElement > null;
//   const { children, ...rest } = props;

//   register();
//   useEffect(() => {
//     // Register Swiper web component
//     register();
//     const params = {
//       ...rest,
//     };

//     // Assign it to swiper element
//     Object.assign(swiperRef.current, params);

//     // initialize swiper
//     swiperRef.current.initialize();
//   }, [rest]);

//   return (
//     <>
//       <swiper-container init="false" ref={swiperRef}>
//         {children}
//       </swiper-container>
//     </>
//   );
// }

// export function SwiperSlide(props) {
//   const { children, ...rest } = props;

//   return <swiper-slide {...rest}>{children}</swiper-slide>;
// }

export function MySwiper(props) {
  const swiperRef = useRef();

  return (
    <>
     
    </>
  );
}

export function SwiperSlide(props) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
