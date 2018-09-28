import { fit } from 'msk'

/**
 * CPF.
 */

export const cpf = (value = '') =>
  fit(value, '999.999.999-99')

/**
 * Phone.
 */

export const phone = (value = '') => value.length === 11
  ? fit(value, '(99) 99999-9999')
  : fit(value, '(99) 9999-9999')

/**
 * CEP.
 */

export const cep = (value = '') =>
  fit(value, '99999-999')

/**
 * Currency.
 */

export const currency = (value = '') =>
  value.toString()
    .replace(/(\d+)(\d{2})$/, '$1,$2')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

/**
 * Integer.
 */

export const integer = (value = '') =>
  fit(value, '999999999999')