import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password,  setPassword] = useState("");
  // How will copy work?

  // creating password generator method
  // useCallback(fn, dependencies)
  useCallback(function passwordGenerator () {
     let pass = ""
     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     if(numberAllowed) str += "0123456789"
     if(characterAllowed) str += "@#$%^&*!_+{}[]\?/,.<>;:~`|"

     for(let i = 1; i < length.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, characterAllowed, setPassword])
   

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'> Password generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text" 
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder='Password'
                readOnly/>

                <button 
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                  Copy
                </button> 
          </div>
          <div>
            {/* length controller */}
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input type="range"
                min={8}
                max={30}
                value={length}
                className="cursor-pointer" 
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label>
                  Length: {length}
                </label>
                {/* length controller End */}
              </div>
              <div className='flex items-center gap-x-1'>
                    <input type="checkbox"
                    defaultChecked= {numberAllowed}
                    id="numberInput"
                    onChange={() => {setNumberAllowed((prev) => !prev);
                    }} />
                    <label>
                      Numbers
                    </label>
              </div>
              <div className='flex items-center gap-x-1'>
                    <input type="checkbox" 
                        defaultChecked= {characterAllowed}
                        id="characterInput"
                        onChange={() => {setCharacterAllowed((prev) => !prev);
                        }} />
                    <label>
                    Character
                    </label>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App