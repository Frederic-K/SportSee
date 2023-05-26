import useFetch from './useFetch'

const endpoint = 'http://localhost:3000'

export async function getUser(id) {
  const res = await useFetch(`${endpoint}/user/${id}`)
  return res.data
}
