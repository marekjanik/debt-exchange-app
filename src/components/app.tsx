import { FC } from 'react';

import { Header } from './header';
import { DebtTable } from './debt-table';

import '../common/scss/global-styles.scss';

export const App: FC = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <DebtTable />
      </main>
    </div>
  );
};
