import * as Yup from 'yup';

export const lecturePriceValidationSchema = Yup.object().shape({
  category: Yup.string().oneOf(
    ['Дорослі', 'Діти', 'Лекції'],
    'дозволені категорії  Дорослі, Діти, Лекції'
  ),
  type: Yup.string()
    .min(2)
    .max(20)
    .required('ERROR:Введіть назву це лекція чи вебінар чи інше ')
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть назву літерами кирилиці'
    ),
  theme: Yup.string()
    .min(2)
    .max(20)
    .required('ERROR:Введіть тему лекції чи вебінару ')
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть назву  лекції чи вебінару літерами кирилиці'
    ),

  price: Yup.number()
    .typeError(' ERROR:Ціна повинна бути числом')
    .test(
      'Is positive?',
      'ERROR: ціна повинна бути числом яке більше 0!',
      value => value >= 0
    )
    .required('ERROR:Введіть вартість пакету '),
});
