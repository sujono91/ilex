import rootReducer from '../Reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import store from '..';

it('should set the root reducer', () => {
  const mockStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  expect(mockStore.getState()).toEqual(store.getState());
});
