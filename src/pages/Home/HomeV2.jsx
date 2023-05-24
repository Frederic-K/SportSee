// import { redirect } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

export default function MyForm() {
  const userID = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userID.current)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userID.current}
        onChange={(e) => (userID.current = e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
