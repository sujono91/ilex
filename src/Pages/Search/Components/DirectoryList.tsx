import React, { FC } from 'react';
import directories from 'Data/countries_and_directories.json';
import logos from 'Data/directory_logos.json';
import { DirectoryContainer, DirectoryItem } from './Styles';

export interface Props {
  country: string;
}

const DirectoryList: FC<Props> = ({ country }) => {
  const selectedDirectories = directories[country] || [];

  return (
    <DirectoryContainer>
      {selectedDirectories.map((directory) => {
        return (
          <DirectoryItem key={directory}>
            <img src={logos[directory]} alt="directory" width="50" height="50" />
          </DirectoryItem>
        );
      })}
    </DirectoryContainer>
  );
};

export default DirectoryList;
