
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'
import Users from './components/Users'
import { type User } from './types';

function App() {

  const [ users, setUsers ] = useState<User[]>([]);

  useEffect(() => {
    fetch( ` https://randomuser.me/api/?results=100 ` )
    .then( data => data.json())
    .then(({ results }) => {
      setUsers(results);
    }
    )
    .catch( error => console.log(error)
    )
  },[])

  return (
    <>
      <h1>Prueba</h1>
      <Users users={users} />
    </>
  )
}

export default App
