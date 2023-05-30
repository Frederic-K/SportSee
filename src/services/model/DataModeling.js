export default function userDataModeling(type, data) {
  switch (type) {
    case 'firstName':
      data = getFirstName(data)
      break
    case 'key-data':
      data = getKeyData(data)
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

// export function getCardKeyData(type, sum) {
//   let { title, value, unit, icon, colour } = ''
//   switch (type) {
//     case 'calorieCount':
//       title = 'Calories'
//       value = sum
//       unit = 'kCal'
//       icon = { iconCalorie }
//       colour = 'ligthRed'
//       break
//     case 'proteinCount ':
//       title = 'Proteines'
//       value = sum
//       unit = 'g'
//       icon = { iconProtein }
//       colour = 'blue'
//       break
//     default:
//       return {}
//   }
//   return { title, value, unit, icon, colour }
// }
