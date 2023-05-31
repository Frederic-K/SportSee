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
  const dataPerf = data.data
  const arrayKind = Object.values(dataPerf.kind)
  const arrayKindValues = data.data.data

  // console.log('dataPerf', dataPerf)
  // console.log('dataPerfKind', dataPerfKind)
  // console.log('arrayKind', arrayKind)
  console.log('arrayKindValues', arrayKindValues)
  // console.log('test to grab value', data.data.data)

  const arrayPerfData = arrayKind.map((kind) => {
    const kindIndex = arrayKind.indexOf(kind) + 1

    // console.log('kindIndex', kindIndex)

    const kindValue = arrayKindValues.find((index) => index.kind === kindIndex)

    // console.log('kindValue', kindValue)

    const translatedkind = translate(kindIndex)

    // console.log('translatedkind', translatedkind)

    return { kind: translatedkind ?? null, value: kindValue?.value ?? null }
  })
  return arrayPerfData
}
function translate(kind) {
  switch (kind) {
    case 1:
      return 'Cardio'
    case 2:
      return 'Energie'
    case 3:
      return 'Endurance'
    case 4:
      return 'Force'
    case 5:
      return 'Vitesse'
    case 6:
      return 'Intensité'
    default:
      return ''
  }
}
