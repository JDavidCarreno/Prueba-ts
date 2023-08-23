
import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'
import { type User } from './types';

function App() {

  const [ users, setUsers ] = useState<User[]>([]);
  const [showColors, setShowcolor] = useState(false);

  const toggleColors = () => {
    setShowcolor(!showColors)
  }

  useEffect(() => {
    fetch( ` https://randomuser.me/api/?results=100 ` )
    .then( data => data.json())
    .then(({ results }) => {
      setUsers(results);
    }
    )
    .catch( error => console.log(error))
  },[])

  return (
    <>
      <h1>Prueba</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
      </header>
      <main>
        <Users users={users} showColors={showColors} />
      </main>
    </>
  )
}

export default App
