import React from 'react';

import TimerStore from './stores/timerStore';

export default React.createContext({
  timerStore: new TimerStore(),
});
