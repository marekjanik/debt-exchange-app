import { FC, useState, useEffect } from 'react';

import { Header } from './header';
import { DebtTable } from './debt-table';

import { EndpointsEnum, DebtType } from '../common';

import '../common/scss/global-styles.scss';

export const App: FC = () => {
  const [debts, setDebts] = useState<DebtType[]>([]);

  const { fetchDebts } = EndpointsEnum;

  useEffect(() => {
    const getDebts = async () => {
      try {
        const response = await fetch(fetchDebts);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data: DebtType[] = await response.json();
        setDebts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getDebts();
  }, [fetchDebts]);

  console.log(debts);

  return (
    <div>
      <Header />
      <main className="container">
        <DebtTable debts={debts} />
      </main>
    </div>
  );
};
