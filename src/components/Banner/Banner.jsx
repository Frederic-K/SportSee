import { useParams } from 'react-router-dom'
//import GetUserData from '../../utils/useUser'
import useFetch from '../../utils/useFetch'
import Loader from '../Loader/Loader'
import Error404 from '../../pages/404/Error404'

import { getUser } from '../../utils/getUser'

function Banner({ firstName }) {
  // const { id } = useParams()
  // const { data, isLoading, error } = useFetch('../../data/user.json')

  // console.log('id', id)
  // console.log('data', data)

  // const usersDatas = data
  // // eslint-disable-next-line eqeqeq
  // const userData = usersDatas.filter((user) => user.id == id)
  // console.log('userData', userData)
  // console.log('userFirstname', userData[0].userInfos.firstName)
  // const firstName = userData[0].userInfos.firstName

  const { id } = useParams()
  const data = getUser(id)
  console.log('data00', data)

  return (
    <div className="dashboard__title">
      <h1 className="dashboard__title--name">
        Bonjour <span>{firstName}</span>
        {/* Bonjour <span>test</span> */}
      </h1>
      <h2 className="dashboard__title--caption">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

export default Banner
