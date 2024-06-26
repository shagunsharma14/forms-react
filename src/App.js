import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const onChangeHandler = (e)=>{
      console.log(e.target.name, e.target.value);
      setText(e.target.value);
  }
  return (      
    <div className="App">
      <h1>Text</h1>
      <h3>{text}</h3>
      <input className='form-control' onChange={onChangeHandler} name='text'/>
    </div>
  );
}

export default App;
