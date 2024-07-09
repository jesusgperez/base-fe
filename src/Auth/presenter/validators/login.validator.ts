import * as yup from 'yup'

export const loginSchemeValidator = yup.object().shape({
  email: yup.string()
  .email('Email is invalid')
  .required('Email is required'),
  password: yup
  .string()
  .required('Password is required')
})
