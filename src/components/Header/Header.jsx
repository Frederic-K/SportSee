import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo SportSee" />
        </NavLink>
      </div>
      <ul className="header__links">
        <li>
          <NavLink
            // to={`/user/${userID}`}
            // to="/user/fake-id"
            to="/user/12"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fake-profil"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fake-setting"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fake-community"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
