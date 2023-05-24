// import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

export default function Home() {
  const navigate = useNavigate()
  const userId = useRef('')

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/user/' + userId.current)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="userID"
        name="userID"
        placeholder="Saisir votre userID ici"
        onChange={(event) => (userId.current = event.target.value)}
      />
      <br />
      <br />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
      <br />
      <br />
    </form>
  )
}
