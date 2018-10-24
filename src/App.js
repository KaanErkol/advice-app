import React from 'react';
import { Provider } from 'react-redux';
import Store from './state/Store';
import Router from './Router'

const store = Store();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;