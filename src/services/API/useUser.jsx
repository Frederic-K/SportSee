import { useState, useEffect } from 'react'
import userDataModeling from '../model/DataModeling'

export default function useUser(type, userId) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  let url = ''

  if (userId === '12' || userId === '18') {
    url = `http://localhost:3000/user/${userId}`
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

        const userModeledData = userDataModeling(type, data)
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
