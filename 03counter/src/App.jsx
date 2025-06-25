import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(3)

  const addValue = () => {
    if (counter ==20){
      setCounter(counter =20)
    } else {
      setCounter(counter +1)
    }
  }

  const removeValue = () => {
    if(counter == 0){
      setCounter(counter =0)
    } else {
      setCounter(counter -1)
    }
  }

  return (
    <>
      <h1>counter value : {counter}</h1>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>remove</button>
    </>
  )
}

export default App
