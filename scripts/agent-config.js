import fs from 'fs'
import path from 'path'
const configPath = path.resolve('src/config.js')
const env = {
  XRPL_ISSUER: process.env.XRPL_ISSUER || 'rEXAMPLEISSUERADDRESS',
  XRPL_CURRENCY: process.env.XRPL_CURRENCY || 'GDC',
  XRPL_TRUSTLINE_LIMIT: process.env.XRPL_TRUSTLINE_LIMIT || '1000000000',
  BUY_URL: process.env.BUY_URL || ''
}
const tpl = `export const XRPL_ISSUER='${env.XRPL_ISSUER}';export const XRPL_CURRENCY='${env.XRPL_CURRENCY}';export const XRPL_TRUSTLINE_LIMIT='${env.XRPL_TRUSTLINE_LIMIT}';export const BUY_URL='${env.BUY_URL}';`
fs.writeFileSync(configPath, tpl, 'utf8')
console.log('Wrote src/config.js with:', env)
