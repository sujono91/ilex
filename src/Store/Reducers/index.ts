import { combineReducers } from 'redux';

import searchReducer from './search.reducer';
import loadingReducer from './loading.reducer';
import searchByIdReducer from './searchById.reducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  search: searchReducer,
  searchById: searchByIdReducer
});

export type RootState = ReturnType<typeof rootReducer>;
