
import { useState } from 'react';
import './App.css';
import User from './components/user/User';

function App() {

const [familiar , setFmiliar] = useState(false)


  return (
    <div className="App">
      <h2>current value :{familiar.toString()} </h2>
      <button onClick={()=>setFmiliar(!familiar)}>toggel</button>
     <User familiar={familiar}></User>
    </div>
  );
}

export default App;
