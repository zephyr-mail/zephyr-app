import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-evenly">
        <a href="https://google.com">
          <img src={viteLogo} className="h-[6em] p-1.5 will-change-auto transition duration-300" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="h-[6em] p-1.5 will-change-auto transition duration-300 react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
