import { FC } from 'react';

import { ColumnType, DebtType, formatData } from '../../../common';

import styles from './table-body.module.scss';

type TableBodyProps = {
  data: DebtType[];
  columns: ColumnType[];
};

export const TableBody: FC<TableBodyProps> = ({ data, columns }) => {
  return (
    <tbody className={styles['table-body']}>
      {data.map((data) => {
        return (
          <tr className={styles['table-body__row']} key={data.Id}>
            {columns.map(({ accessor }) => {
              const tableData = data[accessor as keyof DebtType]
                ? data[accessor as keyof DebtType]
                : '——';
              return (
                <td className={styles['table-body__cell']} key={accessor}>
                  {formatData(tableData)}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
