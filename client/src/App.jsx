import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("")
  const [name, setName] = useState('');
  let handleInput = (event) => {
    setName(event.target.value)
  }

  let handleSubmit = (event) => {
  event.preventDefault()
    axios.post('http://localhost:8080/api', {name})
    .then(response => {
      console.log(response)
      setMessage(response.data.message)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
       <h1>React and Node.js Connection</h1>

<form onSubmit={handleSubmit}>
  <input 
    type="text" 
    value={name}
    onChange={handleInput}
    placeholder="Enter your name"
  />
  <button type="submit">Submit</button>
</form>
&nbsp;
 <p>{message}</p>
</div>
  )
}

export default App
