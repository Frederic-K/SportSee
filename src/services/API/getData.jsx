import { useUser } from './useUser'
import { useActivity } from './useActivity'
import { useAverageSessions } from './useAverageSessions'
import { usePerformance } from './usePerformance'

async function GetData(type, id) {
  let data = {}

  switch (type) {
    case 'user-data':
      data = await useUser(id)
      break
    case 'user-activity':
      data = await useActivity(id)
      break
    case 'user-sesions':
      data = await useAverageSessions(id)
      break
    case 'user-performance':
      data = await usePerformance(id)
      break
    default:
      return {}
  }
  return data
}

export default GetData
