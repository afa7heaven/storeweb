import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import Search from './Search'

import '../../App.css'

const Header = () => {
    
    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Fragment>
                <nav className="navbar row">
                    <div className="col-12 col-md-3">
                        <div className="navbar-brand">
                        <img src="/images/logo.png" style={{ height: 80, width: 80 }} />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mt-2 mt-md-0">
                        <Route render = {({ history }) => <Search history={history} /> } />
                    </div>

                    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                        <button className="btn" id="login_btn">Login</button>
                        <Link to="/cart" style={{ textDecoration: 'none' }} >
                            <span id="cart" className="ml-3">Cart</span>
                            <span className="ml-1" id="cart_count">{cartItems.length}</span>
                        </Link>
                    </div>
                </nav>   
            </Fragment>           
        </div>
    )
}

export default Header


/*

import React, { Fragment } from 'react'




const Header = () => {
    return (
        <Fragment>
         <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                <img src="/images/logo.png" style={{ height: 80, width: 80 }} />
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Product..."
                />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                </div>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <button className="btn" id="login_btn">Login</button>

                <span id="cart" className="ml-3">Cart</span>
                <span className="ml-1" id="cart_count">2</span>
            </div>
            </nav>   
        </Fragment>
    )
}




*/