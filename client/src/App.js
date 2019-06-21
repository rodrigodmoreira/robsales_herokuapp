import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AppThemeProvider from './AppThemeProvider'
import LoginContainer from './containers/LoginContainer'
import SignUpContainer from './containers/SignUpContainer'
import ProductListContainer from './containers/ProductListContainer'

import MainWrapper from './components/MainWrapper'

function App() {
  return (
    <MainWrapper>
      <AppThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LoginContainer} />
            <Route path='/signup' component={SignUpContainer} />
            <Route path='/products' component={ProductListContainer} />
            <Route path='*' component={() => (<div><p>404 - PAGE NOT FOUND</p></div>)} />
          </Switch>
        </BrowserRouter>
      </AppThemeProvider>
    </MainWrapper>
  )
}

export default App;
