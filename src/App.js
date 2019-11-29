import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import productsPage from './pages/productsList';
import shopPage from './pages/shopPage';
import NotFound from './pages/404'

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products" component={productsPage} />
        <Route exact path="/showProducts" component={shopPage} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
)

export default App