import { NavLink } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import Logo from '../../assets/logo/logo.svg'

const Header = () => {
  // const userId = useParams()
  // console.log('userID useParams', userId)

  return (
    <header className="header">
      <div className="header__logo">
        {' '}
        <NavLink to="/">
          <img src={Logo} alt="Logo SportSee" />
        </NavLink>
      </div>
      <ul className="header__links">
        <li>
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Accueil
          </NavLink>{' '}
        </li>
        <li>
          <NavLink
            //   to={`/profil/user/${userId}`}
            to="/profil"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={(nav) =>
              nav.isActive ? 'header__link--active' : 'header__link'
            }
          >
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
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
