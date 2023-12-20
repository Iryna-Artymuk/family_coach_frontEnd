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
      /[ а - яА - ЯЁёЇїІіЄєҐґ.,;: !? -]+/g,
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
    .required('ERROR:Введіть тривалість консультації'),

  period: Yup.number()
    .typeError('ERROR:Термін дії  повиннен бути числом')
    .test(
      'Is positive?',
      'ERROR: термін дії повинно бути число більше 0!',
      value => value >= 0
    )
    .required(' ERROR:Введіть термін дії пакету')
    .nullable(true),

  price: Yup.number()
    .typeError(' ERROR:Ціна повинна бути числом')
    .test(
      'Is positive?',
      'ERROR: ціна повинна бути числом яке більше 0!',
      value => value >= 0
    )
    .required('ERROR:Введіть вартість пакету '),
});
