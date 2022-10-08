import { FC } from 'react';

import { useSortableTable } from '../../hooks';
import { DebtType, ColumnType } from '../../common';

import { TableHead } from './table-head';
import { TableBody } from './table-body';

import styles from './table.module.scss';

type TableProps = {
  columns: ColumnType[];
  data: DebtType[];
};

export const Table: FC<TableProps> = ({ columns, data }) => {
  const { tableData, handleSorting } = useSortableTable<DebtType, ColumnType>(
    data,
    columns
  );

  return (
    <table className={styles.table}>
      <TableHead columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} data={tableData} />
    </table>
  );
};
