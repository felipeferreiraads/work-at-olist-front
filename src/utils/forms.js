import * as validators from 'utils/validators'
import * as formatters from 'utils/formatters'
import * as parsers from 'utils/parsers'

const createRequired = ({ parse, format, validate, ...props }) => ({
  parse,
  format,
  validate: value => validate
    ? validators.required(value) || validate(value)
    : validators.required(value),
  ...props
})

/**
 * Required.
 */

export const required = {
  validate: validators.required
}

/**
 * E-mail.
 */

export const email = {
  type: 'email',
  validate: validators.email
}

export const emailRequired = createRequired(email)

/**
 * Password.
 */

export const password = {
  type: 'password',
  validate: validators.password
}

export const passwordRequired = createRequired(password)

/**
 * Match.
 */

export const match = {
  validate: validators.match
}

/**
 * Phone.
 */

export const phone = {
  type: 'tel',
  format: formatters.phone,
  parse: parsers.digits,
  validate: validators.phone
}

export const phoneRequired = createRequired(phone)

/**
 * CEP.
 */

export const cep = {
  type: 'tel',
  format: formatters.cep,
  parse: parsers.digits,
  validate: validators.cep
}

export const cepRequired = createRequired(cep)

/**
 * Currency.
 */

export const currency = {
  type: 'tel',
  format: formatters.currency,
  parse: parsers.integer
}

export const currencyRequired = createRequired(currency)

/**
 * Integer.
 */

export const integer = {
  type: 'tel',
  format: formatters.integer,
  parse: parsers.integer,
  validate: validators.integer
}

export const integerRequired = createRequired(integer)
