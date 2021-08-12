
//import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import { UseTimeout2 } from './components/timmer';
import { UsemergeState } from './components/useMergeState';

function App() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  //const [payload,setPayload]=useState()
  
  const { min, start, stop, reset, start1 } = UseTimeout2()
  
  const {state,newState}=UsemergeState()
  //console.log(payload)
 
  return (
    <div className="App">
      <h1>{ min}min{start}</h1>
      <button onClick={stop}>Stop</button>
      <button onClick={start1}>Start</button>
      <button onClick={reset}>Reset</button>
      <div style={{marginTop:100}}>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
        <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
        <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        <button onClick={() => {
        // setPayload({Email:email,Name:name,pass:password})
          const payload = {
            Email:email,Name:name,pass:password
          }
          newState(payload)
          
        }}>Add</button>
        {state.map(e => <div>
        <p>Name: {e.Name}</p>
          <p>Email: {e.Email}</p>
          <p>Password: { e.pass}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
