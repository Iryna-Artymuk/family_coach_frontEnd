import * as Yup from 'yup';
const emailRegExpr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .matches(emailRegExpr, 'Введіть коректну електронну адресу'),
  password: Yup.string().required().min(6),
});
