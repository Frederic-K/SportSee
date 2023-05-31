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
    case 'user-performance':
      data = getPerformance(data)
      break
    // case 'user-sesions':
    //   data = getAverageSeeions(data)
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
  let dailyScore = data.data.todayScore * 100 || data.data.score * 100
  return dailyScore
}

function getPerformance(data) {
  const translateKindPerf = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]
  return data.data.map((perf, kind) => ({
    kind: translateKindPerf[kind],
    value: perf.value,
  }))
}
