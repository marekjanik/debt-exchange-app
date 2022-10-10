import React, { FC } from 'react';

import { Home } from '../views';

import '../scss/global-styles.scss';

export const App: FC = () => {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
};
