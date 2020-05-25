import { Dispatch } from 'redux';
import qs from 'qs';

import actions from 'Store/Actions';
import Axios from 'Core/Axios';
import { SearchDataResponse, SearchDataByIdResponse } from 'Model';
import ENDPOINT from 'Core/Endpoint';

export interface QueryParam {
  name: string;
  street: string;
  zip: string;
  country?: string;
}

export const search = (param: QueryParam) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.search.request());
  dispatch(actions.loading(true));

  try {
    const response = await Axios.post<SearchDataResponse>(`${ENDPOINT.search}?${qs.stringify(param)}`);
    dispatch(actions.search.success(response.data));
  } catch {
    dispatch(actions.search.failure());
  } finally {
    dispatch(actions.loading(false));
  }
};

export const searchById = (param: { id: number, directories: string[], token: string }) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.searchById.request());
  dispatch(actions.loading(true));

  try {
    const response = await Promise.all(
      param.directories.map((directory: string) => {
        return Axios.get<SearchDataByIdResponse>(`${ENDPOINT.searchById(param.id)}?${qs.stringify({
          directory,
          public_key: process.env.REACT_APP_PUBLIC_KEY,
          token: param.token
        })}`);
      })
    );

    const result = response.map((item) => item.data.response.result);

    dispatch(actions.searchById.success(result));
  } catch {
    dispatch(actions.searchById.failure());
  } finally {
    dispatch(actions.loading(false));
  }
};

