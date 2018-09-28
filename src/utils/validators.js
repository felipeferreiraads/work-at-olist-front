import isEmail from 'is-email'
import { memoizeWith, identity } from 'ramda'

/**
 * Required.
 */

export const required = value =>
  !(value !== '' && value != null) &&
  'Campo obrigatório'

/**
 * E-mail.
 */

export const email = value =>
  !isEmail(value) && 'E-mail inválido'

/**
 * Password.
 */

export const password = value =>
  !(value && value.length >= 6) && 'Senha precisa conter pelo menos 6 caracteres'

/**
 * Match
 */

export const match = memoizeWith(identity, ({ field, message }) => (value, allValues) =>
  value !== allValues[field] && message
)

/**
 * Phone
 */

export const phone = value => value && !/\d{10,11}/.test(value) &&
  'Telefone inválido'

/**
 * CEP.
 */

export const cep = value => value && !/\d{8}/.test(value) &&
  'CEP inválido'

/**
 * Integer.
 */

export const integer = value =>
  (value && parseInt(value, 10) !== value) &&
  'Número inteiro inválido'
