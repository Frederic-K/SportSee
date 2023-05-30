import getCardKeyData from '../../services/model/DataModeling'

function KeyDataCard({ data }) {
  console.log('card data', data)

  let type = data[0]
  let sum = data[1]

  const { title, value, unit, icon, colour } = getCardKeyData(data)

  return (
    <div className="nutrition__card">
      {type} : {sum}
    </div>
  )
}

export default KeyDataCard
