import React, { FC } from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logos from 'Data/directory_logos.json';
import { DirectoryItem } from './Styles';

export interface Props {
  list: Array<{
    directoryType: string;
    status: boolean;
  }>;
}

const DirectoryTable: FC<Props> = ({ list }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Directory</th>
          <th>Latest update</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ directoryType, status }) => {
          return (
            <tr key={directoryType}>
              <td>
                <DirectoryItem>
                  <img src={logos[directoryType]} alt="directory" width="50" height="50" />
                </DirectoryItem>
              </td>
              <td>
                <FontAwesomeIcon icon={['far', status ? 'check-circle' : 'times-circle']} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DirectoryTable;
