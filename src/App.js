import React, {useState} from 'react';

import './App.css';

export default () => {
  const [age, setAge]= useState(10);
  const [name, setName] = useState('Peter')
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Name: <input type="text" value={name} onChange = {e => setName(e.target.value)} />
          </p>
          <p>Age: {age}</p>
          <button onClick={() => setAge(age + 1)}>Increment Age By One</button>
        </div>
        <p>Name: {name}  Age:{age}</p>
      </header>
    </div>
  )
}
