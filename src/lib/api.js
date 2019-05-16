import axios from 'axios'

export const api = async (jwt, uri) => {
  const scheme = jwt.domain === 'localhost:8000' ? 'http' : 'https'
  const url = `${scheme}://${jwt.domain}/api/${uri}`
  console.log(url)
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${jwt.access}`
    },
  })
  return response.data
}
