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
    case 'user-sessions':
      data = getAverageSessions(data)
      break
    default:
      return {}
  }
  return data
}

function getFirstName(data) {
  return data.data?.userInfos?.firstName || null
}

function getKeyData(data) {
  return data.data?.keyData || null
}

function getDailyScore(data) {
  let dailyScore = data.data?.todayScore * 100 || data.data?.score * 100 || null
  return dailyScore
}

function getPerformance(data) {
  // const globalDataPerf = data.data
  // const arrayKinds = Object.values(globalDataPerf.kind)
  // console.log('arrayKinds', arrayKinds)

  const arrayKindValues = data.data.data
  // console.log('arrayKindValues', arrayKindValues)

  const translateKind = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]

  const arrayPerfDatas = arrayKindValues?.map((kind, index) => ({
    kind: translateKind[index],
    value: kind.value,
  }))
  return arrayPerfDatas
}

function getAverageSessions(data) {
  // const globalDataAvgSessions = data.data
  // console.log('globalDataAvgSessions', globalDataAvgSessions)
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const arrayAverageSessions = data.data.sessions.map((session) => {
    return {
      day: days[session.day - 1],
      sessionLength: session.sessionLength,
    }
  })
  return arrayAverageSessions
}
