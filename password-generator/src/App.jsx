import { useState, useCallback,useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~!@#$%^&*()";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClip = useCallback(()=> {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])



  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-pink-500">
        <h1 className="text-white text-center my-3">Password Generaor</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <label htmlFor="passwordInput">
            <input
              type="text"
              defaultValue={password}
              id="passwordInput"
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
          </label>
          <button 
          onClick={
            copyPasswordToClip
          }
          className="outline-none
           bg-blue-900
            text-white
             px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex test-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <label htmlFor="lengthInput">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                id="lengthInput"
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              {length}
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
