export const priceDataAdult = [
  {
    id: 1,
    type: 'Преміум',
    amount: '10 консультацій + супровід в тг/дзвінок',
    duration: '50-70',
    period: '90',
    price: '12000',
  },
  {
    id: 2,
    type: 'Оптимальний',
    amount: '4 консультації + екстрений дзвінок',
    duration: '50-70',
    period: '40',
    price: '4000',
  },
  {
    id: 3,
    type: 'Стандарт',
    amount: '4 консультації',
    duration: '50-70',
    period: '30',
    price: '3500',
  },
  {
    id: 4,
    type: 'Консультація',
    amount: 'Разова консультація ',
    duration: '50-70',
    period: null,
    price: '950',
  },
  {
    id: 5,
    type: 'Додатково*',
    amount: 'Текстовий формат / Дзвінок ',
    duration: '30-45',
    period: null,
    price: '600',
  },
];
export const priceDataKids = [
  {
    id: 1,
    type: 'Стандарт дитячий',
    amount: '8 консультацій',
    duration: '30-45',
    period: '40',
    price: '4500',
    singleConsultation: {
      type: 'Разова консультація',
      duration: '30-45',
      price: '600',
    },
  },
  {
    id: 2,
    type: 'Стандарт підлітки',
    amount: '4 консультацій',
    duration: '45-55',
    period: '30',
    price: '3000',
    singleConsultation: {
      type: 'Разова консультація',
      duration: '45-55',

      price: '800',
    },
  },
  {
    id: 3,
    type: 'Батьки',
    amount: 'Дзвінок/текстовий формат',
    duration: '30-45',
    period: null,
    price: '600',
    singleConsultation: {
      type: 'Разова консультація',
      duration: '50-70',
      price: '950',
    },
  },
];
