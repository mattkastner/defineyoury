import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Culture from './components/culture/Culture'
import Product from './components/product/Product'
import Business from './components/business/Business'
import Training from './components/training/Training'
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