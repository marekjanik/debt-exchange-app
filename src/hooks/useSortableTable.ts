import { useState, useCallback } from 'react';

const getDefaultSorting = <
  TData extends Record<string, string | number>,
  TColumn extends Record<string, string | boolean>
>(
  defaultTableData: TData[],
  columns: TColumn[]
) => {
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter((column) => column.sortByOrder);

    // Merge all array objects into single object and extract accessor and sortbyOrder keys
    let { accessor = 'id', sortByOrder = 'asc' } = Object.assign(
      {},
      ...filterColumn
    );

    if (a[accessor as keyof TData] === null) return 1;
    if (b[accessor as keyof TData] === null) return -1;
    if (
      a[accessor as keyof TData] === null &&
      b[accessor as keyof TData] === null
    )
      return 0;

    const ascending = a[accessor as keyof TData]
      .toString()
      .localeCompare(b[accessor as keyof TData].toString(), 'en', {
        numeric: true,
      });

    return sortByOrder === 'asc' ? ascending : -ascending;
  });

  return sorted;
};

export const useSortableTable = <
  TData extends Record<string, string | number>,
  TColumn extends Record<string, string | boolean>
>(
  data: TData[],
  columns?: TColumn[]
) => {
  const [tableData, setTableData] = useState(
    getDefaultSorting(data, columns ?? [])
  );

  const handleSorting = useCallback(
    (sortField: keyof TData, sortOrder: string) => {
      if (sortField) {
        const sorted = [...tableData].sort((a, b) => {
          if (a[sortField] === null) return 1;
          if (b[sortField] === null) return -1;
          if (a[sortField] === null && b[sortField] === null) return 0;
          return (
            a[sortField]
              .toString()
              .localeCompare(b[sortField].toString(), 'en', {
                numeric: true,
              }) * (sortOrder === 'asc' ? 1 : -1)
          );
        });
        setTableData(sorted);
      }
    },
    [tableData]
  );

  return { tableData, setTableData, handleSorting };
};
