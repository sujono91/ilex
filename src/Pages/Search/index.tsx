import React, { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useThunkDispatch from 'Shared/Hooks';
import SearchBar from './Components/SearchBar';
import { SearchDataParam } from 'Model';
import { search, searchById } from 'Store/Actions/thunk';
import { searchData } from 'Store/Selectors';
import directories from 'Data/countries_and_directories.json';

const SearchPage = () => {
  const dispatch = useThunkDispatch();
  const searchResult = useSelector(searchData);

  const searchDirectories = useCallback(
    async (param: SearchDataParam) => {
      await dispatch(search(param));
    },
    [dispatch]
  );

  useEffect(() => {
    if (searchResult) {
      dispatch(searchById({
        directories: directories[searchResult.response.searchData.country],
        id: searchResult.response.searchData.id,
        token: searchResult.response.searchData.token
      }));
    }
  }, [dispatch, searchResult]);

  return (
    <>
      <h1>Is your company listed accurately in these online directories?</h1>
      <br />
      <code><h2>ONLINE PRESENCE CHECK</h2></code>
      <br />
      <SearchBar onSubmit={searchDirectories}/>
    </>
  );
};

export default memo(SearchPage);
