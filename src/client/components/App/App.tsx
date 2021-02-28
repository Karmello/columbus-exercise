import React from 'react'
import { hot } from 'react-hot-loader'
import { Divider } from 'semantic-ui-react'

import { AppHeader, AppFooter, ProductPage } from 'components/index'

import './App.css'

const App = () => (
  <div className="App">
    <header>
      <AppHeader />
    </header>
    <main>
      <ProductPage />
    </main>
    <footer>
      <AppFooter />
    </footer>
    <Divider hidden />
  </div>
)

export default hot(module)(App)
