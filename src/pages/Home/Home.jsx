// Set a connection page to manage dashboard with mocked datas or backend

import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import ProfilPixMale from '../../assets/icon/homme.png'
import ProfilPixFemale from '../../assets/icon/femme.png'

export default function Home() {
  const navigate = useNavigate()
  const userId = useRef('')

  function handleSubmit(event) {
    event.preventDefault()
    if (userId.current === '' || userId.current === null) {
      alert('Merci de saisir un userID')
    } else {
      navigate(`/user/${userId.current}`)
    }
  }

  return (
    <section className="home">
      <h1 className="home__title">
        Bienvenue sur <span>SportSee</span> !
      </h1>
      <div className="home__profilPix">
        <div className="home__profilPix--male">
          <img src={ProfilPixMale} alt="Dessin de profile homme" />
        </div>
        <div className="home__profilPix--female">
          <img src={ProfilPixFemale} alt="Dessin de profile femme" />
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          id="userId"
          name="userId"
          placeholder="Saisir votre userId ici *"
          onChange={(event) => (userId.current = event.target.value)}
        />
        <span>Saisie obligatoire *</span>
        <div className="form__btn">
          <button className="form__btn--reset" type="reset">
            Reset
          </button>
          <button className="form__btn--submit" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="home__form--infos">
        <p>
          (Pour utiliser les datas dupliquées, rajouter un "0" à votre userId)
        </p>
      </div>
    </section>
  )
}
