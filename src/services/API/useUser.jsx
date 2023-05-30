import { useState, useEffect } from 'react'
import userDataModeling from '../model/DataModeling'
import { type } from '@testing-library/user-event/dist/type'

function useUser(userId, type) {
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

        const userModeledData = userDataModeling(data, type)

        setData(userModeledData)
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
