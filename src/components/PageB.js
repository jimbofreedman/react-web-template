import React from 'react';
import { observer } from 'mobx-react';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';

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
        <Button variant="contained" color="primary" component={Link} to="/c">
          Page A
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/b">
          Page B
        </Button>
      </header>
    </div>
  );
}

export default observer(PageB);
