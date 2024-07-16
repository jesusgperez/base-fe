import * as yup from 'yup'

export const retrieveSchemeValidator = yup.object().shape({
  email: yup.string()
  .email('Email is invalid')
  .required('Email is required')
})
