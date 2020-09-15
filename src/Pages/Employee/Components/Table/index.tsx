import React, { FC, memo } from 'react';
import { Table } from 'reactstrap';

interface Props {
  heads: string[];
  rows: Array<{[key: string]: string | React.ReactNode}>;
}

const DataTable: FC<Props> = ({ heads, rows }) => {
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
        {rows.map((row, index) => {
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
