import React from 'react';
import { observer } from 'mobx-react';
import { Link } from '@reach/router';

import useStores from '../useStores';
import logo from '../logo.svg';
import '../App.css';

function PageB() {
  const { timerStore } = useStores();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Page B.</p>
        <button
          type="button"
          onClick={timerStore.resetTimer}
        >{`Seconds passed: ${timerStore.timer}`}</button>
        <Link to="/a">Page A</Link>
        <Link to="/b">Page B</Link>
      </header>
    </div>
  );
}

export default observer(PageB);
