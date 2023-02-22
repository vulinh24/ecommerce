import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import imgShop from '../assets/images/shop.png'
import '../style/shop.css'
import ShopProducts from '../components/UI/shopProducts/ShopProducts'
import request from '../utils/request'
import localProducts from '../assets/data/products.js'


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const initData = async () => {
            const getCate = request.get('/products/categories');
            const getProducts = request.get('/products');
            Promise.all([getCate, getProducts])
                .then(([cates, prods]) => {
                    setCategories(cates.data)
                    setProducts(prods.data)
                })
        }
        initData()
    }, [])

    const filterByCategory = (cate) => {
        let url = '';
        if (cate === '') url = '/products';
        else url = `/products/category/${cate}`;
        request.get(url)
            .then(result => {
                setProducts(result.data)
            })
    }

    const filterBySort = (sort) => {
        let url = '';
        if (sort === '') url = '/products';
        else url = `/products?sort=${sort}`;
        request.get(url)
            .then(result => {
                console.log('cate')
                setProducts(result.data)
            })
    }

    const filterBySearch = (keyword) => {
        console.log(keyword)
        if (keyword !== '') {
            const searchedProduct = localProducts.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
            setProducts(searchedProduct)
        } else {
            console.log('empty')
            filterBySort('')
        }
    }


    return (
        <Helmet title="Shop">
            <Row>
                <div className="banner__cover"></div>
                <div className="banner__shop">
                    <img src={imgShop} alt="img shop" />
                    <p>SHOP</p>
                </div>
            </Row>
            <section className='shop__filter'>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <select name="" id="" className="cate__filter" defaultValue={''} onChange={e => { filterByCategory(e.target.value) }}>
                                <option value="">Filter by category</option>
                                {
                                    categories.map(item => (
                                        <option key={item} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </Col>
                        <Col lg='3'>
                            <select name="" id="" className="sort__filter" defaultValue={''} onChange={e => { filterBySort(e.target.value) }}>
                                <option value="">Sort by</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </Col>
                        <Col lg='6'>
                            <input type="text" className="search__box" placeholder='search ...' onChange={e => filterBySearch(e.target.value)} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section >
                {
                    products.length === 0 && <h2 style={{textAlign:'center'}}>No products are found!</h2>
                }
                <ShopProducts products={products} />
            </section>
        </Helmet>
    )
}

export default Shop