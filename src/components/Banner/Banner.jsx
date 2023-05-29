import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'
import Error404 from '../../pages/404/Error404'

function Banner({ userId }) {
  const { data, isLoading, error } = useUser(userId)

  if (error) {
    return <Error404 />
  }

  // const firstName = data.data?.userInfos.firstName

  return (
    <div className="dashboard__title">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <h1 className="dashboard__title--name">
          Bonjour <span>{data.data.userInfos.firstName}</span>
          {/* Bonjour <span>{firstName}</span> */}
        </h1>
      )}
      <h2 className="dashboard__title--caption">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}

export default Banner

// import { useState, useEffect } from 'react'
// import userDataModeling from '../../services/model/DataModeling'
// import useUser from '../../services/API/useUser'
// //import SpinLoader from '../Loader/SpinLoader'
// import Error404 from '../../pages/404/Error404'

// function Banner({ userId }) {
//   const [user, setUser] = useState({})
//   const { data, isLoading, error } = useUser(userId)

//   useEffect(() => {
//     isLoading === false && setUser(userDataModeling(data.data))
//   }, [data.data, isLoading])

//   if (error) {
//     return <Error404 />
//   }

//   return (
//     <div className="dashboard__title">
//       <h1 className="dashboard__title--name">
//         Bonjour <span>{user.userInfos?.firstName}</span>
//       </h1>

//       <h2 className="dashboard__title--caption">
//         Félicitation ! Vous avez explosé vos objectifs hier 👏
//       </h2>
//     </div>
//   )
// }

// export default Banner
