export default function userDataModeling(type, data) {
  switch (type) {
    case 'firstName':
      data = getFirstName(data)
      break
    case 'key-data':
      data = getKeyData(data)
      break
    case 'daily-score':
      data = getDailyScore(data)
      break
    // case 'user-sesions':
    //   data = useAverageSeeions(id)
    //   break
    // case 'user-performance':
    //   data = usePerformance(id)
    //   break
    default:
      return {}
  }
  return data
}

function getFirstName(data) {
  return data.data.userInfos.firstName
}

function getKeyData(data) {
  return data.data.keyData
}

function getDailyScore(data) {
  let dailyScore = data.data.todayScore || data.data.score
  return dailyScore
}
