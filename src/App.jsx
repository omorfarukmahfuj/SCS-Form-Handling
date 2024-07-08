import { useState } from 'react';
import './App.css'
import Cards from './components/Cards';
import Form from './components/Form';

function App() {
  const [users, setUsers] = useState([])
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards users={users}></Cards>
        <Form></Form>
      </div>

    </div>
  )
}

export default App
