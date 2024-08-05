// src/App.js
import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
};

export default App;
