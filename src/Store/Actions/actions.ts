import { createStandardAction as action, createAsyncAction as asyncAction } from 'typesafe-actions';
import { SearchDataResponse, SearchDataById } from 'Model';

const search = asyncAction(
  'SEARCH/GET_DATA',
  'SEARCH/GET_DATA_SUCCESS',
  'SEARCH/GET_DATA_FAILED'
)<void, SearchDataResponse, void>();

const searchById = asyncAction(
  'SEARCH_BY_ID/GET_DATA',
  'SEARCH_BY_ID/GET_DATA_SUCCESS',
  'SEARCH_BY_ID/GET_DATA_FAILED',
)<void, SearchDataById[], void>();

export const loading = action('loading/GET_DATA')<boolean>();

export default { search, searchById, loading };
