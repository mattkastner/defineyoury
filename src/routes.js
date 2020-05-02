import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Culture from './views/Culture'
import Product from './views/Product'
import Business from './views/Business'
import Training from './views/Training'
import ProductShare from './components/productShare/ProductShare'

export default (
    <Switch>
        <Route exact path='/' component={Culture} />
        <Route path='/product' component={Product} />
        <Route path='/business' component={Business} />
        <Route path='/training' component={Training} />
        <Route path='/share' component={ProductShare} />
    </Switch>
)