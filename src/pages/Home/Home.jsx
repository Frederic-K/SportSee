import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <main className="home__dashboard--link">
        <NavLink to="user/18">user id 18</NavLink>
        <NavLink to="user/12">user id 12</NavLink>
      </main>
    </div>
  )
}

export default Home
