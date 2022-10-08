import { FC, useState, useEffect } from 'react';

import { Header } from './header';
import { Table } from './table';

import { EndpointsEnum, DebtType, ColumnType } from '../common';

import '../scss/global-styles.scss';

const columns: ColumnType[] = [
  { label: 'Dłużnik', accessor: 'Name', sortable: true, sortByOrder: 'asc' },
  { label: 'NIP', accessor: 'NIP', sortable: true },
  { label: 'Kwota zadłużenia', accessor: 'Value', sortable: true },
  { label: 'Data powstania zobowiązania', accessor: 'Date', sortable: true },
];

export const App: FC = () => {
  const [data, setData] = useState<DebtType[]>([]);

  const isTableData = data.length !== 0;

  useEffect(() => {
    const getDebts = async () => {
      try {
        const response = await fetch(EndpointsEnum.fetchDebts);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data: DebtType[] = await response.json();

        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getDebts();
  }, [setData]);

  return (
    <div>
      <Header />
      <main className="container">
        {isTableData && <Table columns={columns} data={data} />}
      </main>
    </div>
  );
};
