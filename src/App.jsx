import { useState } from 'react';
import './App.css'
import Cards from './components/Cards';
import Form from './components/Form';

function App() {
  const [users, setUsers] = useState([]);


  const addUser = user => {
    setUsers([...users, user]);
  }

  const handleRemove = (id) => {
    setUsers(users.filter((item, index) => index !== id))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards handleRemove={handleRemove} users={users} ></Cards>
        <Form addUser={addUser}></Form>
      </div>

    </div>
  )
}

export default App
