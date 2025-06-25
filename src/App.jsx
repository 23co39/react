import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button className="relative block group ">
      <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
      <div className="transition bg-black relative border-2 rounded-lg -translate-x-2 -translate-y-2">
        <div className="p-2 ">
          <p className="text-xl font-outerSans font-medium">Button</p>
        </div>
      </div>
    </button> 
    <Card  username="owais" btnText="clickme"/>
    <Card username="none" btnText="hii"/>
    </>
  )
}

export default App
