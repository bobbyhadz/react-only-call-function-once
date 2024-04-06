import './App.css';

import {useEffect, useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    // 👇️ Only runs once
    console.log('useEffect ran');

    function incrementNum() {
      setNum(prev => prev + 1);
    }

    incrementNum();
  }, []); // 👈️ Empty dependencies array

  return (
    <div>
      <h2>Number is {num}</h2>
    </div>
  );
};

export default App;
