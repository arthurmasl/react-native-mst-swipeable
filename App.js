import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import GlobalStore from './store/GlobalStore';
import Layout from './components/Layout';

const store = {
  store: GlobalStore
};

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
