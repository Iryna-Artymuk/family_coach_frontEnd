import * as Yup from 'yup';
const emailRegExpr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Введіть ім'я нового адміна").min(2),
  email: Yup.string()
    .required()
    .matches(emailRegExpr, 'Введіть коректну електронну адресу'),
  password: Yup.string()
    .min(6, 'Мінімальна довжина назви 6 символи')
    .max(64, 'Максимальна довжина 64 символи')
    .required('придумайье надійний пароль')
    .matches(/^(?=.*[a-z])/, 'Повинен містити  хоча б одну маленьку літеру')
    .matches(/^(?=.*[A-Z])/, 'Повинен містити хоча б  одну велику літеру')
    .matches(/^(?=.*[0-9])/, 'Повинен містити хоча б  одну цифру')
    .matches(
      /^(?=.*[@#$%^&+=!])/,
      'Повинен містити хоча б  один спеціальний символ  @ # $ % ^ & + = !'
    ),
  userRoles: Yup.array()
    .test('is-value', '   Оберіть посаду ', value => {
      return value && value.length > 0;
    })
    .required(),
});
