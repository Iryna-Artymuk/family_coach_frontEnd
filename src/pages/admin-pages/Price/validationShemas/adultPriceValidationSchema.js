import * as Yup from 'yup';

export const adultPriceValidation = Yup.object().shape({
  category: Yup.string().oneOf(
    ['Дорослі', 'Діти', 'Лекції'],
    'дозволені категорії  Дорослі, Діти, Лекції'
  ),
  type: Yup.string()
    .min(2)
    .max(20)
    .required('ERROR:Введіть назву   пакету')
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть назву літерами кирилиці'
    ),
  amount: Yup.string()
    .typeError(
      ' ERROR:Введіть кількість консультацій числом  або  опис консультації'
    )
    .min(1)
    .max(100)
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть  назву літерами кирилиці'
    )
    .required(
      'ERROR:Введіть кількість консультацій числом  або  опис консультації'
    ),
  duration: Yup.string()
    .typeError(' ERROR: Тривалість консультації повинна бути числом')
    .matches(/^[0-9-]+$/, 'тривалість повинна бути числом ')
    // .transform((_, val) => {
    //   console.log('val: ', val);
    // })
    .required('ERROR:Введіть тривалість консультації'),

  period: Yup.string()
    .typeError(' ERROR: Термін дії повинен бути числом')
    .matches(/^[0-9-]+$/, 'Термін дії повинен бути числом '),
  price: Yup.number()
    .typeError(' ERROR:Ціна повинна бути числом')
    .test(
      'Is positive?',
      'ERROR: ціна повинна бути числом яке більше 0!',
      value => value >= 0
    )
    .required('ERROR:Введіть вартість пакету '),
});
