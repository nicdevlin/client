import React, {Component, Fragment} from 'react'
import { Header, BodyWindow } from './ProductsContainer.styles'
import { Route } from 'react-router-dom'
import NewProduct from '../NewProduct/NewProduct'
import AllProducts from '../AllProducts/AllProducts'
import store from '../../../../Redux/store'
import helpers from '../../../../Helpers'

import {EditButton, DeleteButton} from '../AllProducts/ProductTile/ProductTile.styles'


const { api } = helpers

class ProductsContainer extends Component {

    deleteProduct = (product) => {
        api.products.destroy(product, product.companyId, () => {
            this.props.history.push('/dashboard/products')
        })
    }

    createProduct = (e) => {
        e.preventDefault()
        const form = e.target.elements
        console.log("In funct createProduct", store.getState().currentUser.company._id)
        
        const newProduct = {
            companyId: store.getState().currentUser.company._id,
            price: form.price.value,
            productId: form.productId.value,
            name: form.name.value,
            description: form.description.value,
            // categories: form.categories.value,
            // tags: form.tags.value,
            stockQty: form.stockQty.value
        }

        // Replaced store.dispatch with this for our state updates and api requests
        api.products.create(newProduct, () => {
            this.props.history.push('/dashboard/products')
        })
    
    }

    componentDidMount () {
        // Replaced store.dispatch with this for our state updates and api requests
        api.products.all()
       
    }


    render(){

        const {products} = store.getState()

        return (
            <Fragment>
                <Header>
                </Header>
                <BodyWindow>
                    <Route exact path='/dashboard/products' render={(rProps) => (
                        <AllProducts {...rProps} deleteProduct={this.deleteProduct} productsArray={products}  />
                    )}  />
                    <Route path='/dashboard/products/new' render={(rProps) => (
                        <NewProduct {...rProps} onSubmit={this.createProduct} />
                    )} />
                </BodyWindow>
            </Fragment>
        )
    }
}


export default ProductsContainer
