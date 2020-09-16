import React, { FC, memo } from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  isLoading?: boolean;
  heads: string[];
  rows: Array<{[key: string]: string | React.ReactNode}>;
}

const DataTable: FC<Props> = ({ isLoading, heads, rows }) => {
  return (
    <Table>
      <thead>
        <tr>
          {heads.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr>
            <td colSpan={heads.length} style={{ textAlign: 'center' }}>
              <FontAwesomeIcon icon={['fas', 'spinner']} spin size="2x" />
            </td>
          </tr>
        )}
        {!isLoading && rows.map((row, index) => {
          return (
            <tr key={index}>
              {Object.keys(row).map((key) => (
                <td key={key}>
                  {row[key] || '-'}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default memo(DataTable);
