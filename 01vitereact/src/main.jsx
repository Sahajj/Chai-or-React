import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime"
// from here we can write our React.CreateElement directly using the jsx 
// but that is also not as easy as react.createElement 
// ye kiya ja sakta h 
// 
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App| function </h1>
    </div>
  )
}
// we can't render this because the react does not know what parameters we are passing in this object
const reactElement = {
  type:'a', 
  props: { 
      href: '#',
      target: '_blank'
  },
  children: "Click me to visit google",
}

// this will be renders because it's a basic html element
const anotherElement = (
  <a href="https://Google.com" target="_blank"> click me to go to google</a>
)


// adding js, variables in this
const anotherUser= "Narender Modi"

// the real react object or we can say the parameters that react expects before we can pass the object into the render
// this is converted by bable 
const ReactElement = React.createElement(
  /// parameter 1 tag
  'a',
  // object , Attribtures props thiging
  {
    href: "https://google.com", target: "_blank"
  },
  'Click me to visit google',
  // added after 
  // can be used like this 
  // basically we can pass a variable in simple html also and it will be rendered
  //! But We can't do js things inside here also because it's an object and also because React Does no Allow it 
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  // converted into the object and then will be run

  // reactElement
  // this will not work because the param react wants are not passed in this object 
 
  ReactElement
  // this is using the react library it self

  // ***************************************
  // back to passing js and variables using the App.jsx 
  // <App/>
)

