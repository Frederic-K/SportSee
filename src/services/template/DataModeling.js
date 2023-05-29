function userDataModeling(data) {
  let UserModeledData = {
    id: data.id,
    keyData: data.keyData,
    score: data.todayScore ? data.todayScore : data.score,
    userInfos: data.userInfos,
  }

  return UserModeledData
}

export default userDataModeling
