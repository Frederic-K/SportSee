function userDataModeling(data) {
  let userModeledData = {
    id: data.id,
    keyData: data.keyData,
    score: data.todayScore ? data.todayScore : data.score,
    userInfos: data.userInfos,
  }

  console.log('userModeledData-userDataModeling', userModeledData.userInfos)

  return userModeledData
}

export default userDataModeling
