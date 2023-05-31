import useUser from '../../services/API/useUser'
import SpinLoader from '../Loader/SpinLoader'
import energyIcon from '../../assets/icon/energy.svg'
import proteinIcon from '../../assets/icon/chicken.svg'
import carbsIcon from '../../assets/icon/apple.svg'
import fatIcon from '../../assets/icon/cheeseburger.svg'

export default function KeyData({ userId }) {
  const { isLoading, data, error } = useUser('key-data', userId)

  if (error) {
    return <div>Erreur de chargement...</div>
  }

  return (
    <div className="keyDatas__nutrition">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <div className="keyDatas__nutrition--cards">
          <div className="nutrition__card">
            <div className="nutrition__card--iconCalorie">
              <img src={energyIcon} alt="Icone calorie" />
            </div>
            <div className="nutrition__card--detail">
              <div className="nutrition__card--count">
                {data.calorieCount}kCal
              </div>
              <div className="nutrition__card--type">Calories</div>
            </div>
          </div>
          <div className="nutrition__card">
            <div className="nutrition__card--iconProtein">
              <img src={proteinIcon} alt="Icone proteine" />
            </div>
            <div className="nutrition__card--detail">
              <div className="nutrition__card--count">{data.proteinCount}g</div>
              <div className="nutrition__card--type">Proteines</div>
            </div>
          </div>
          <div className="nutrition__card">
            <div className="nutrition__card--iconCarb">
              <img src={carbsIcon} alt="Icone glucide" />
            </div>
            <div className="nutrition__card--detail">
              <div className="nutrition__card--count">
                {data.carbohydrateCount}g
              </div>
              <div className="nutrition__card--type">Glucides</div>
            </div>
          </div>
          <div className="nutrition__card">
            <div className="nutrition__card--iconFat">
              <img src={fatIcon} alt="Icone lipide" />
            </div>
            <div className="nutrition__card--detail">
              <div className="nutrition__card--count">{data.lipidCount}g</div>
              <div className="nutrition__card--type">Lipides</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
