import axios from 'axios'

export const obtain = async credentials => {
  const url = `https://${credentials.domain}/api/jwt/obtain/`
  console.log(`connecting to ${url}`)
  const response = await axios.post(url, credentials, {
    headers: { 'Content-Type': 'application/json' },
  })
  return response.data
}

export const refresh = async jwt => {

}