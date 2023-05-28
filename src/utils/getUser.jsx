import { useState, useEffect } from 'react'

function useUser(userId) {
  const [data, setData] = useState({})
  // const [url, setUrl] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // let url = `http://localhost:3000/user/` + userId

  // if (userId === '12' || userId === '18') {
  //   setUrl(`http://localhost:3000/user/` + userId)
  // } else {
  //   setUrl(`../../data/${userId}/user`)
  // }

  let url = ''

  if (url === '12' || url === '18') {
    url = `http://localhost:3000/user/` + userId
  } else {
    url = `../../data/${userId}/user.json`
  }

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isLoading, data, error }
}
export default useUser
