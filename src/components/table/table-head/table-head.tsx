import { FC, useState, useCallback } from 'react';

import { ColumnType } from '../../../common';

import styles from './table-head.module.scss';

type TableHeadProps = {
  columns: ColumnType[];
  handleSorting: (sortField: any, sortOrder: any) => void;
};

export const TableHead: FC<TableHeadProps> = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState('Name');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = useCallback(
    (accessor: string) => {
      const sortOrder =
        accessor === sortField && order === 'asc' ? 'desc' : 'asc';
      setSortField(accessor);
      setOrder(sortOrder);
      handleSorting(accessor, sortOrder);
    },
    [handleSorting, order, sortField]
  );

  return (
    <thead className={styles['table-head']}>
      <tr className={styles['table-head__row']}>
        {columns.map(({ accessor, label, sortable }) => {
          const sortIcon = sortable
            ? sortField === accessor && order === 'asc'
              ? '▲'
              : sortField === accessor && order === 'desc'
              ? '▼'
              : ''
            : '';

          return (
            <th
              className={styles['table-head__cell']}
              key={accessor}
              onClick={
                sortable ? () => handleSortingChange(accessor) : undefined
              }
            >
              {`${label} ${sortIcon}`}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
