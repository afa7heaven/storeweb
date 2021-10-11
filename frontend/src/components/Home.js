import React, { Fragment ,useState,useEffect } from 'react'
import Pagination from 'react-js-pagination'

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'

import {useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'

import {Carousel} from 'react-bootstrap'

export const Home = ({match}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 1000])
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)


    const keyword = match.params.keyword

    useEffect(() => {

        if (error){

            return alert.error(error)
        }

        dispatch(getProducts(keyword, currentPage, price, category, rating));

    }, [dispatch, alert, error, keyword, currentPage, price, category, rating])

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }

    let count = productsCount;
    if (keyword) {
        count = filteredProductsCount
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                        <MetaData title={'Best PRoduct'} />
                        <br/>
                        <Carousel>
                            <Carousel.Item>
                                <img src={'https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg'} alt="sdf" className='w-100' height='400'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={'https://i.pinimg.com/originals/70/6a/f3/706af3fe06bf4091f94893a006ce597e.jpg'} alt="sdf" className='w-100' height='400'/>
                            </Carousel.Item>
                        </Carousel>
                        <div className="container">
                            <h1 id="products_heading">Latest Products</h1>

                            <section id="products" class="container mt-5">
                                <div className="row">
                                    {products && products.map(product => (
                                        <Product key={product._id} product={product} /> //product div => components/layout/product
                                    ))}
                                </div>
                            </section>

                            <div className="d-flex justify-content-center mt-5">
                                {resPerPage <= productsCount && (
                                        <Pagination 
                                        activePage={currentPage}
                                        itemsCountPerPage={resPerPage}
                                        totalItemsCount={productsCount}
                                        onChange={setCurrentPageNo}
                                        nextPageText = {'Next'}
                                        prevPageText = {'Prev'}
                                        firstPageText = {'First'}
                                        lastpageText = {'Last'}
                                        itemClass="page-item"
                                        linkClass="page-link"


                                    />
                                )}

                            </div>
                            </div>
                </Fragment>    
            )}

   
         </Fragment>    
    )
}



export default Home

/*
import React, { Fragment, useEffect } from 'react'

import MetaData from './layout/MetaData'
import Product from './product/Product'
import Loader from './layout/Loader'

import {useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { getProducts } from '../actions/productActions'


const Home = ({match}) => {

     const dispatch = useDispatch();

     const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)
 
    useEffect(() => {

        if (error){

            return alert.error(error)
        }

        dispatch(getProducts());
        
    }, [dispatch, alert, error])
    
    return (

        <Fragment>
            {loading ? <h1>Loading...</h1> : (

                <Fragment>
                    <MetaData title={'Best PRoduct'} />
                    <h1 id="products_heading">Latest Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product} /> //product div => components/layout/product
                            ))}

                        </div>
                    </section> 
                </Fragment>    
            )}
 
        </Fragment>             
   
    )
}


*/

/*

import React, { Fragment, useState, useEffect } from 'react'

const Home = () => {
 
}

export default Home

/*
import Pagination from 'react-js-pagination'



import MetaData from './layout/MetaData'
import Product from './product/Product'

import {useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../action/productActions'

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch();

    const { loading, products, error, productsCount, resPerPage } = useSelector(state => state.products)
    
    useEffect(() => {

        dispatch(getProducts(currentPage));

    }, [dispatch])

    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <Fragment> 
            <MetaData title={'Best PRoduct'} />
            <h1 id="products_heading">New Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {products && products.map(product => (
                         <Product key={product.id} product={product} />
                    ))}
                                     
                </div>
            </section>

            <div className="d-flex justify-content-center mt-5">
                <Pagination 
                    activePage={currentPage}
                    itemsCountPerPage={resPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText = {'Next'}
                    prevPageText = {'Prev'}
                    firstPageText = {'First'}
                    lastpageText = {'Last'}
                    itemClass="page-item"
                    linkClass="page-link"


                />
            </div>
        </Fragment>
    )
}



<Fragment>
            <MetaData title={'Best PRoduct'} />
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" class="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                        <img
                            className="card-img-top mx-auto"
                            src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                            <a href="">128GB Solid Storage Memory card - SanDisk Ultra</a>
                            </h5>
                            <div className="ratings mt-auto">
                            <div className="rating-outer">
                                <div className="rating-inner"></div>
                            </div>
                            <span id="no_of_reviews">(5 Reviews)</span>
                            </div>
                            <p className="card-text">$45.67</p>
                            <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>   
         </Fragment>    


*/

