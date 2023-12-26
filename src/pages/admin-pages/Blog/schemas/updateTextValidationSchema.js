import * as Yup from 'yup';

export const updatePostValidation = Yup.object().shape({
  postCategory: Yup.string().oneOf(
    [
      'Саморозвиток',
      'Мотивація',
      'Відносини',
      'Діти',
      'Підлітки',
      'Без категорії',
    ],
    'дозволені категорії Саморозвиток, Мотивація, Відносини, Діти, Підлітки,  Без категорії'
  ),
  title: Yup.string()
    .typeError(' ERROR:Введіть заголовок')
    .min(1)
    .max(50)
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть  заголовок літерами кирилиці'
    )
    .required('ERROR:Введіть заголовок'),
  description: Yup.string()
    .typeError(' ERROR:Введіть короткий опис про що стаття')
    .min(1)
    .max(300)
    .matches(
      /[а-яА-ЯЁёЇїІіЄєҐґ0-9.,;:!?-]+/g,
      'Введіть  опис літерами кирилиці'
    )
    .required('ERROR:Введіть короткий опис про що стаття'),
  post: Yup.string().required('ERROR: де ж стаття'),
});
