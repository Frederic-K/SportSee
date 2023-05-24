import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <section className="errorPage">
      <div className="errorPage__type">404</div>
      <div className="errorPage__title">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <NavLink to="/" className="errorPage__link">
        Retourner sur la page d’accueil
      </NavLink>
    </section>
  )
}

export default Error404
