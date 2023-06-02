import { useState, useEffect } from 'react'
import userDataModeling from '../model/DataModeling'

function useActivity(type, userId) {
  const [data, setData] = useState({})
  // const [url, setUrl] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
        // console.log('fetchData', data)
        const userModeledData = userDataModeling(type, data)
        console.log('userModeledData-01', userModeledData)
        setData(userModeledData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [type, userId, url])
  return { isLoading, data, error }
}
export default useActivity
