import React, { memo, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { AppStyled } from './App.styled'

function App() {
  return (
    <BrowserRouter>
      <AppStyled>
        <Suspense fallback={<div></div>}>
          {renderRoutes(routes)}
        </Suspense>
      </AppStyled>
    </BrowserRouter>
  );
}

export default memo(App);
