import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

import { AppHeader, AppFooter, ProductPage } from 'components/index'

import './App.css'

const App = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0)

  return (
    <div className="App">
      <header>
        <AppHeader totalPrice={totalPrice} />
      </header>
      <main>
        <ProductPage totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  )
}

export default hot(module)(App)
