import { NavLink } from 'react-router-dom'
import worksiteLogo from '../../assets/icon/travail-en-cours.png'

function underConstruction() {
  return (
    <main className="underConstructionPage">
      <div className="errorPage__type">
        <img
          src={worksiteLogo}
          alt="Travaux en cours"
          className="errorPage__type--img"
        />
      </div>
      <div className="errorPage__title">
        Oups! La page que vous demandez est en travaux.
      </div>
      <NavLink to="/" className="errorPage__link">
        Retourner sur la page d’accueil
      </NavLink>
    </main>
  )
}

export default underConstruction
