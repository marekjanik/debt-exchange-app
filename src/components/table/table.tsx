import React, { FC, useEffect, useState } from 'react';

import { useSortableTable } from '../../hooks';
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
  const [isLoading, setIsLoading] = useState(false);

  const { tableData, setTableData, handleSorting } = useSortableTable<
    DebtType,
    ColumnType
  >(data, columns);

  useEffect(() => {
    const getDebts = async () => {
      if (searchPhrase) {
        try {
          setIsLoading(true);

          const response = await fetch(EndpointsEnum.fetchFilteredDebts, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchPhrase),
          });

          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }

          const data: DebtType[] = await response.json();

          setTableData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getDebts();
  }, [searchPhrase, setTableData]);

  console.log(tableData);

  return (
    <React.Fragment>
      {isLoading && <Loader />}

      {!isLoading && (
        <table className={styles.table}>
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} data={tableData} />
        </table>
      )}
    </React.Fragment>
  );
};
