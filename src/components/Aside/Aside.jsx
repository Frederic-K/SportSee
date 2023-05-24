import { NavLink } from 'react-router-dom'
import Zen from '../../assets/icon/zen.svg'
import Swim from '../../assets/icon/swim.svg'
import Bicycle from '../../assets/icon/bicycle.svg'
import Dumbell from '../../assets/icon/dumbell.svg'

function aside() {
  return (
    <aside className="aside">
      <ul className="aside__links">
        <NavLink
          to="/meditation"
          className={(nav) =>
            nav.isActive ? 'aside__link--active' : 'aside__link'
          }
        >
          <li>
            <img src={Zen} alt="Activité : relaxation" />
          </li>
        </NavLink>
        <NavLink
          to="/swimming"
          className={(nav) =>
            nav.isActive ? 'aside__link--active' : 'aside__link'
          }
        >
          <li>
            <img src={Swim} alt="Activité : natation" />
          </li>
        </NavLink>
        <NavLink
          to="/cycling"
          className={(nav) =>
            nav.isActive ? 'aside__link--active' : 'aside__link'
          }
        >
          <li>
            <img src={Bicycle} alt="Activité : cyclisme" />
          </li>
        </NavLink>
        <NavLink
          to="/bodybuilding"
          className={(nav) =>
            nav.isActive ? 'aside__link--active' : 'aside__link'
          }
        >
          <li>
            <img src={Dumbell} alt="Activité : musculation" />
          </li>
        </NavLink>
      </ul>
    </aside>
  )
}

export default aside
