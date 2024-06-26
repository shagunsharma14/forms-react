import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    occupation: '',
    gender: '',
    languages:[],
  })

  const onChangehandler = (event)=>{
    console.log(event);
   if(event.target.name === 'languages'){
    let copy = {...formData}
    if(event.target.checked){
      copy.languages.push(event.target.value)
    }
    else{
      copy.languages = copy.languages.filter(el=> el !== event.target.value)
    }
    setFormData(copy)
   }else{
    setFormData(()=>({
      ...formData,
      [event.target.name]: event.target.value
    }));
   }
  }
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.table(formData);
    console.log('Submit');
  }

  return (      
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='username' className='form-label'>User Name</label>
          <input className='form-control' name='username' onChange={onChangehandler}/>
        </div>
        <div className='form-group'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input className='form-control' name='email'  onChange={onChangehandler}/>
        </div>
        <div className='form-group'>
          <label htmlFor='occupation' className='form-label'>Occupation</label>
          <select className='form-control' name='occupation'  onChange= {onChangehandler}>
            <option value='student'>Student</option>
            <option value='employee'>Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='gender' className='form-label'>Gender</label>
          <div className='form-check'>
            <input  type='radio' name='gender' value='male'  onChange={onChangehandler}/>
            <label htmlFor='male'>Male</label>
          </div>
          <div className='form-check'>
            <input type='radio' name='gender' value='female'  onChange={onChangehandler}/>
            <label htmlFor='female'>Female</label>
          </div>
          <div className='form-check'>
            <input  type='radio' name='gender' value='other'  onChange={onChangehandler}/>
            <label htmlFor='other'>Other</label>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='languages' className='form-label'>languages</label>
          <div className='form-check'>
            <input  type='checkbox' name='languages' value='html'  onChange={onChangehandler}/>
            <label htmlFor='html'>HTML</label>
          </div>
          <div className='form-check'>
            <input  type='checkbox' name='languages' value='CSS'  onChange={onChangehandler}/>
            <label htmlFor='CSS'>CSS</label>
          </div>
          <div className='form-check'>
            <input c type='checkbox' name='languages' value='javascript'  onChange={onChangehandler}/>
            <label htmlFor='javascript'>javascript</label>
          </div>
        </div>
        <div className='form-group'>
          <button className='btn' type='submit'onClick={console.log(formData)}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
