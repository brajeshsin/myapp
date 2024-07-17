import React, {useState} from 'react';
import "./App.css";


function App(){

  const [count, setCount] = useState(0)
 
  return(
    <div className='App'>
     <header>
      <h1 className='text'>Counter  app made by - Brajesh singh</h1>
     </header>
     <h4 className='text'>Using state / hooks </h4>
     <h2 className='text'>Current value of count is : {count} </h2>
     <button onClick={() => setCount(0)}>Reset Counter</button>
     <button onClick={() => setCount(count + 1)}>Increase Counter</button>
     <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
    </div>
  );
}

export default App;