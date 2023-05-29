import { useFetch } from './useFetch'
import { userDataModeling } from '../model/DataModeling'

function useUser(userId) {
  let url = ''

  if (userId === '12' || userId === '18') {
    url = `http://localhost:3000/user/${userId}`
  } else {
    url = `../../data/${userId}/user.json`
  }

  const { data, isLoading, error } = useFetch(url)
  const userModeledData = new userDataModeling(data)
  console.log('userModeledData', userModeledData)
  return { isLoading, userModeledData, error }
}
export default useUser
