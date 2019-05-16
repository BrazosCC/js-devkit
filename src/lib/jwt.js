import axios from 'axios'
import fs from 'fs'

const filename = '.jwt'

export const obtain = async credentials => {
  const scheme = credentials.domain === 'localhost:8000' ? 'http' : 'https'
  const url = `${scheme}://${credentials.domain}/api/jwt/obtain/`
  console.log(`connecting to ${url}`)
  const response = await axios.post(url, credentials, {
    headers: { 'Content-Type': 'application/json' },
  })
  return {...response.data, domain: credentials.domain}
}

export const refresh = async jwt => {
  const scheme = jwt.domain === 'localhost:8000' ? 'http' : 'https'
  const url = `${scheme}://${jwt.domain}/api/jwt/refresh/`
  console.log(`connecting to ${url}`)
  const response = await axios.post(url, {refresh: jwt.refresh}, {
    headers: { 'Content-Type': 'application/json' }
  })
  return {...response.data, refresh: jwt.refresh, domain: jwt.domain}
}

export const save = jwt => {
  fs.writeFileSync(filename, JSON.stringify(jwt), 'utf8')
  console.log(`${jwt.domain} JWT saved as ${filename}`)
}

export const load = () => {
  const jwt = JSON.parse(fs.readFileSync(filename, 'utf8'))
  console.log(`${jwt.domain} JWT loaded from ${filename}`)
  return jwt
}