import { NavLink } from 'react-router-dom'
import Aside from '../../components/Aside/Aside'

function Error404() {
  return (
    <div className="errorPage">
      <Aside />
      <section className="errorPage__content">
        <div className="errorPage__type">404</div>
        <div className="errorPage__title">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <NavLink to="/" className="errorPage__link">
          Retourner sur la page d’accueil
        </NavLink>
      </section>
    </div>
  )
}

export default Error404
