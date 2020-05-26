import React, { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useThunkDispatch from 'Shared/Hooks';
import SearchBar from './Components/SearchBar';
import { SearchDataParam } from 'Model';
import { search, searchById } from 'Store/Actions/thunk';
import { searchData, directoryList, loading } from 'Store/Selectors';
import directories from 'Data/countries_and_directories.json';
import DirectoryTable from './Components/DirectoryTable';

const SearchPage = () => {
  const dispatch = useThunkDispatch();
  const searchResult = useSelector(searchData);
  const isLoading = useSelector(loading);
  const list = useSelector(directoryList);

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
      <SearchBar onSubmit={searchDirectories} isLoading={isLoading} />
      <br />
      {list.length > 0 && <DirectoryTable list={list} />}
    </>
  );
};

export default memo(SearchPage);
