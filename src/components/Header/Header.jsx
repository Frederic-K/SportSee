import { NavLink, useParams } from 'react-router-dom'
import Logo from '../../assets/logo/logo.svg'

const Header = () => {
  const userId = useParams()
  console.log('userID useParams', userId)

  return (
    <div className="header">
      <div className="header__logo">
        {' '}
        <NavLink to="/">
          <img src={Logo} alt="Logo SportSee" />
        </NavLink>
      </div>
      <ul className="header__links">
        <NavLink
          to="/"
          end
          className={(nav) =>
            nav.isActive ? 'header__link--active' : 'header__link'
          }
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          //   to={`/profil/user/${userId}`}
          to="/profil"
          className={(nav) =>
            nav.isActive ? 'header__link--active' : 'header__link'
          }
        >
          <li>Profil</li>
        </NavLink>
        <NavLink
          to="/setting"
          className={(nav) =>
            nav.isActive ? 'header__link--active' : 'header__link'
          }
        >
          <li>Réglage</li>
        </NavLink>
        <NavLink
          to="/community"
          className={(nav) =>
            nav.isActive ? 'header__link--active' : 'header__link'
          }
        >
          <li>Communauté</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Header
