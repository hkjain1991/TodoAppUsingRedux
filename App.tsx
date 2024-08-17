import React from 'react';
import { Provider } from 'react-redux';
import Route from './route/Route';
import { persistor } from './globalstate/store/TodoStore';
import persistSt from './globalstate/store/TodoStore';
import { PersistGate } from 'redux-persist/lib/integration/react';

const App = (): React.JSX.Element => {
  return (
    <Provider store={persistSt}>
      <PersistGate persistor={persistor}>
      <Route/>
      </PersistGate>
    </Provider>
  );
}

export default App;
