import React from 'react';
import { observer } from 'mobx-react';

import useStores from './useStores';
import logo from './logo.svg';
import './App.css';

function App() {
  const { timerStore } = useStores();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          type="button"
          onClick={timerStore.resetTimer}
        >{`Seconds passed: ${timerStore.timer}`}</button>
      </header>
    </div>
  );
}

export default observer(App);
