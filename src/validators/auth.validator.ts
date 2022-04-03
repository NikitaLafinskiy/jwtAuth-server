import * as yup from 'yup';

export const authValidator = yup.object({
  email: yup
    .string()
    .required('The field email is required')
    .email('Has to be an email'),
  password: yup.string().required('The field password is required'),
});
