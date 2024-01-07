import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./componenets/card.jsx"

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name:"sahaj",
    age:47,
  }

  let newArr =[1,23,4,5,6]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Chai or code" />
    <Card username="Sahaj" btnText="Click me"/>
    </>
  )
} 

export default App
