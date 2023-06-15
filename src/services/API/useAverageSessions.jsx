// Custom Hook to grab user's average sessions datas
// Call fct to format data to ensure datas r always normalized
// Set data with formatted data for line chart from average-sessions chart component

import { useState, useEffect } from 'react'
import userDataModeling from '../model/DataModeling'

function useAverageSessions(type, userId) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  let url = ''

  if (userId === '12' || userId === '18') {
    url = `http://localhost:3000/user/${userId}/average-sessions`
  } else {
    url = `../../data/${userId}/average-sessions.json`
  }

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        // Grab datas
        const response = await fetch(url)
        const data = await response.json()
        // Formatted datas
        const userModeledData = userDataModeling(type, data)
        // Set datas with formatted datas
        setData(userModeledData)
      } catch (err) {
        // Handel error
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [type, url])
  return { isLoading, data, error }
}
export default useAverageSessions
