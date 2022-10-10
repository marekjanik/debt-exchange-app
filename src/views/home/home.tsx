import { FC, useState, useEffect } from 'react';

import { useFetch } from '../../hooks';
import { EndpointsEnum, DebtType, ColumnType } from '../../common';

import { Header, Loader, Table } from '../../components';

import styles from './home.module.scss';

const columns: ColumnType[] = [
  { label: 'Dłużnik', accessor: 'Name', sortable: true, sortByOrder: 'asc' },
  { label: 'NIP', accessor: 'NIP', sortable: true },
  { label: 'Kwota zadłużenia', accessor: 'Value', sortable: true },
  { label: 'Data powstania zobowiązania', accessor: 'Date', sortable: true },
];

export const Home: FC = () => {
  const { fetchData, fetchedData, isLoading, error } = useFetch<DebtType[]>();

  const [searchPhrase, setSearchPhrase] = useState<string>('');

  const isTableData = fetchedData && fetchedData.length !== 0;

  useEffect(() => {
    fetchData(EndpointsEnum.fetchDebts);
  }, []);

  return (
    <div className={styles.home}>
      <Header onSearchPhrase={setSearchPhrase} />

      <main className={styles.home__main}>
        {error && <p className={styles.home__error}>{error?.message}</p>}

        {isLoading && !isTableData && <Loader />}

        {!isLoading && isTableData && (
          <Table
            columns={columns}
            data={fetchedData}
            searchPhrase={searchPhrase}
          />
        )}
      </main>
    </div>
  );
};
