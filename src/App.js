import { Routes, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Landing from './components/Landing';

import * as ROUTES from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/characterReducer';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} />
        <Route path={ROUTES.ALLCHARACTERS} element={<Characters />} />
      </Routes>
    </Provider>
  );
}

export default App;
