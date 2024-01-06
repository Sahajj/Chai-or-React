import Chai from "./chai"
function App() {

  const username = "chai aur code|sahaj|"
  return (<>
    <Chai/>
    {/* cna be like this */}
    {username}
    <p>this can be my name {username}</p>
  </>
    
  )
}

/*
  How will we add variables or js how will it be injected
      {username}
    <p>this can be my name {username}</p>
    LIKE this 
  *************************************
  But if this is js
  can we write 
  {if(true) username}
  NO WE CAN'T  
  
*/ 

export default App
