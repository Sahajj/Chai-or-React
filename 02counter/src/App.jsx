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
    // challenge
    if(counter < 20 ){
      setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);     
      // setCounter(counter+1);
      //? Using to Callback to update the value of the counter
      //? that fetches the last counter values state and then updates that not the 
      //? counter value passed in the main function
      //! the value of the call back can be anything
      //! any variable and then we call it an update it
      //* This also tells that the setCounter function accepts a callback that can be used
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter-1);
    }
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
