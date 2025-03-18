import { useState, useEffect } from 'react'
import axios from 'axios';
import logo from './logo.svg'
import { addOne } from '@onboarding/utils';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(import.meta.env.VITE_BACKEND_URL);
      setMessage(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => addOne(count))}>
            count is: {count}
          </button>
        </p>
        <p>
          Message from the server: {message}
        </p>
      </header>
    </div>
  )
}

export default App