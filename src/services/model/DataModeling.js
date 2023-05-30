// function userDataModeling(type, data) {
//   let userModeledData = {
//     id: data.id,
//     keyData: data.keyData,
//     score: data.todayScore ? data.todayScore : data.score,
//     userInfos: data.userInfos,
//   }

//   console.log('userModeledData-userDataModeling', userModeledData.userInfos)

//   return userModeledData
// }

// export default userDataModeling

export default function userDataModeling(type, data) {
  switch (type) {
    case 'firstName':
      data = getFirstName(data)
      break
    case 'key-data':
      data = getKeyData(data)
      break
    // case 'user-sesions':
    //   data = await useAverageSeeions(id)
    //   break
    // case 'user-performance':
    //   data = await usePerformance(id)
    //   break
    default:
      return {}
  }
  return data
}

function getFirstName(data) {
  return data === 'Impossible de récupérer les données utilisateur'
    ? 'Utilisateur inconnu'
    : data.data.userInfos.firstName
}

export function getDefaultKeyData() {
  return {
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  }
}

function getKeyData(data) {
  return data === 'Impossible de récupérer les données utilisateur'
    ? getDefaultKeyData()
    : data.data.keyData
}
