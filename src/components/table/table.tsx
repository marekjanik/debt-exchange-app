import { FC, useEffect } from 'react';

import { useFetch, useSortableTable } from '../../hooks';
import { DebtType, ColumnType, EndpointsEnum } from '../../common';

import { TableHead } from './table-head';
import { TableBody } from './table-body';
import { Loader } from '../loader';

import styles from './table.module.scss';

type TableProps = {
  columns: ColumnType[];
  data: DebtType[];
  searchPhrase?: string;
};

export const Table: FC<TableProps> = ({ columns, data, searchPhrase }) => {
  const { fetchData, fetchedData, isLoading, error } = useFetch<DebtType[]>();

  const { tableData, setTableData, handleSorting } = useSortableTable<
    DebtType,
    ColumnType
  >(data, columns);

  const isTableData = tableData.length > 0;

  useEffect(() => {
    if (searchPhrase) {
      fetchData(EndpointsEnum.fetchFilteredDebts, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchPhrase),
      });
    }
  }, [searchPhrase, fetchData]);

  useEffect(() => {
    if (fetchedData) {
      setTableData(fetchedData);
    }
  }, [fetchedData, setTableData]);

  return (
    <div className={styles['table-container']}>
      {error && (
        <p className={styles['table-container__error']}>{error?.message}</p>
      )}

      {isLoading && <Loader />}

      {!isLoading && !isTableData && (
        <p className={styles['table-container__empty']}>Nic nie znaleziono.</p>
      )}

      {!isLoading && !error && isTableData && (
        <table className={styles['table-container__table']}>
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} data={tableData} />
        </table>
      )}
    </div>
  );
};
