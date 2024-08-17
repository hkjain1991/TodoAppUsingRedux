import React from 'react';
import { Provider } from 'react-redux';
import Route from './route/Route';
import TodoStore from './globalstate/store/TodoStore';

const App = (): React.JSX.Element => {
  return (
    <Provider store={TodoStore}>
      <Route/>
    </Provider>
  );
}

export default App;
