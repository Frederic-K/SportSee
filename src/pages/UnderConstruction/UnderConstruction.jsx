// Set a default page for Profil / Réglage / Communauté section

import { NavLink } from 'react-router-dom'
import worksiteLogo from '../../assets/icon/travail-en-cours.png'
import Aside from '../../components/Aside/Aside'

export default function underConstruction() {
  return (
    <div className="underConstructionPage">
      <Aside />
      <main className="underConstructionPage__content">
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
          Retourner à la page d'acceuil
        </NavLink>
      </main>
    </div>
  )
}
