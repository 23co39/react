import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(3)

  const addValue = () => {
    counter += 1
    setCounter(counter)
  }

  const removeValue = () => {
    console.log(counter)
    counter -= 1
    setCounter(counter)
  }

  return (
    <>
      <h1>counter value : {counter}</h1>
      <button onClick={addValue} disabled= {counter >= 20}>Add</button>
      <br />
      <button onClick={removeValue} disabled= {counter <= 0}>remove</button>
    </>
  )
}

export default App
