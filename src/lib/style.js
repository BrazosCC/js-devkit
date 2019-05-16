import chalk from 'chalk'

export const brand = "GetLoci.com"
export const primary = '#eb4e20'

export const title = chalk.bgHex(primary).whiteBright(` ${brand} `) + ' ' +
  chalk.hex(primary)('Javascript Developer Toolkit')
