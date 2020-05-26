import { createSelector } from 'reselect';
import { RootState } from 'Store/Reducers';
import { SearchDataById } from 'Model';

export const loading = (state: RootState) => state.loading.loading;

export const searchData = (state: RootState) => state.search.data;

export const searchDataById = (state: RootState) => state.searchById.data;

export const directoryList = createSelector(
  searchDataById,
  (rows: SearchDataById[]) => {
    return rows.map(({listingId, directoryType}) => {
      return {
        directoryType,
        status: !!listingId
      };
    });
  }
);
