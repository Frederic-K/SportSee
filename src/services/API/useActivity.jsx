import { useState, useEffect } from 'react'

function useActivity(userId) {
  const [data, setData] = useState({})
  // const [url, setUrl] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // let url = `http://localhost:3000/user/` + userId

  let url = ''

  if (userId === '12' || userId === '18') {
    url = `http://localhost:3000/user/${userId}/activity`
  } else {
    url = `../../data/${userId}/activity.json`
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
export default useActivity
