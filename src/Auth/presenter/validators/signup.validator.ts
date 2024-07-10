import * as yup from 'yup'

export const signupSchemeValidator = yup.object().shape({
  firstName: yup
  .string()
  .required('First name is required'),
  lastName: yup
  .string()
  .required('Last name is required'),
  email: yup.string()
  .email('Email is invalid')
  .required('Email is required'),
  password: yup
  .string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters long')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
  passwordRepeat: yup
  .string()
  .required('Repeat the password is required')
  .oneOf([yup.ref('password')], 'Passwords must match')
})