import axios from 'axios'
import querystring from 'querystring'

export const query = async (jwt, gql) => {
  const scheme = jwt.domain === 'localhost:8000' ? 'http' : 'https'
  const body = {
    query: gql
  }
  const url = `${scheme}://${jwt.domain}/api/gq`
  console.log(url)
  const response = await axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${jwt.access}`
    },
  })
  return response.data.data
}
