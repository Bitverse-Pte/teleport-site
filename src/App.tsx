import React, { memo, Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { AppStyled } from './App.styled'

function App() {
  return (
    <HashRouter>
      <AppStyled>
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </AppStyled>
    </HashRouter>
  );
}

export default memo(App);
