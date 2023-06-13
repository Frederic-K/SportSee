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
    case 'user-activity':
      data = getActivity(data)
      break
    default:
      return {}
  }
  return data
}

function getFirstName(data) {
  const globalUserData = data.data
  const globalUserInfos = globalUserData.userInfos
  const firstName = globalUserInfos.firstName
  return firstName
}

function getKeyData(data) {
  const globalUserData = data.data
  const globalKeyData = globalUserData.keyData
  return globalKeyData
}

function getDailyScore(data) {
  const globalUserData = data.data
  let dailyScore = globalUserData.todayScore * 100 || globalUserData.score * 100
  return dailyScore
}

function getPerformance(data) {
  const globalDataPerf = data.data
  // const arrayKinds = Object.values(globalDataPerf.kind)
  // console.log('arrayKinds', arrayKinds)

  const arrayKindValues = globalDataPerf.data
  // console.log('arrayKindValues', arrayKindValues)

  const translateKind = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ]
  const arrayPerfDatas = arrayKindValues.map((kind, index) => ({
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

function getActivity(data) {
  const arraySessionsActivity = data.data.sessions.map(
    ({ kilogram, calories }, index) => {
      return {
        kilogram: kilogram,
        calories: calories,
        day: (index + 1).toString(),
      }
    }
  )
  // console.log('arraySessionsActivity', arraySessionsActivity)
  return arraySessionsActivity
}
