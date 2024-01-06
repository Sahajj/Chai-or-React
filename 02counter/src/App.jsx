import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hook of react
  // Variable name 
  
  // useState hook keeps the value of a variable 
  // here he have to initialize
  // useState(<give value>)

  // Dega kya ye
  // give 2 things
  // 1 variable and second one is a function 
  // the function is always defined as set<values>
  // like login, setLogin
  // counter, setCounter
  // this function is there just to control the variable 
  // the more number of variables the more set function we will be having
  let [counter, setCounter] = useState(0)

  // How will we able to update the counter
  // We can use it like
  // setCounter(counter++ or counter+1 or counter * 2) Whatever you want to do with it you can do in here
  // 



  const addValue = () => {
    setCounter(counter+1);
  }

  const removeValue = () => {
    setCounter(counter-1);
  }

  return (
    <>
    <h1>Chai or react</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br /><br />
    <button onClick={removeValue}>Remove value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
