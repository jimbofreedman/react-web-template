import React from 'react';
import { observer } from 'mobx-react';
import { Router } from '@reach/router';

import PageA from './components/PageA';
import PageB from './components/PageB';

import './App.css';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Router>
        <PageA path="/a" default />
        <PageB path="/b" />
      </Router>
    </div>
  );
}

export default observer(App);
