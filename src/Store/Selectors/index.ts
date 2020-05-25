import { RootState } from 'Store/Reducers';

export const loading = (state: RootState) => state.loading.loading;

export const searchData = (state: RootState) => state.search.data;

export const searchDataById = (state: RootState) => state.searchById.data;
