import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'


import Helmet from '../components/Helmet/Helmet'
import '../style/home.css'
import heroImg from '../assets/images/hero-img.png'
import ListProduct from '../components/UI/category/ListProduct'

import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock/Clock'
import request from '../utils/request'

const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProd, setTrendingProd] = useState([]);
  const [favProd, setFavProd] = useState([])
  const [categoryProd, setCategoryProd] = useState([])

  useEffect(() => {
    const tredPromise = request.get('/products', { params: { limit: 4 } });
    const favPromise = request.get('/products', { params: { limit: 4, sort: 'desc' } })
    Promise.all([tredPromise, favPromise])
      .then(([trend, fav]) => {
        setTrendingProd(trend.data);
        setFavProd(fav.data);
      })

  }, [])

  useEffect(() => {
    async function fetchProductByCate() {

      const getCate = await request.get('/products/categories')
      const categories = getCate.data
      console.log('cate', categories);
      const listPromise = categories.map(cate => request.get(`/products/category/${cate}`))
      Promise.all(listPromise)
        .then(arr => {
          const res = arr.map(item => item.data)
            .map(item => {
              return {
                title: item[0].category,
                items: item
              }
            });
          setCategoryProd(res)
        })
    }
    fetchProductByCate()
  }, [])

  return (
    <Helmet title={'Home'}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">
                  Trending product {year}
                </p>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </p>
                <button className="buy__btn">SHOP NOW</button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ListProduct title='Trending Products' items={trendingProd} />
      <ListProduct title='Favorite Products' items={favProd} />

      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="counter__content">
                <h3>Super Sale</h3>
                <h4>Quality Armchair</h4>
                <p>
                  <span style={{ textDecoration: 'line-through', fontSize: '1.5rem' }}>$200</span>
                  <span style={{ color: 'red !important', fontWeight: '600', marginLeft: '40px', fontSize: '1.5rem' }}>$150</span>
                </p>
                <Clock />
              </div>
            </Col>
            <Col lg='6'>
              <img src={counterImg} alt="counter img" />
            </Col>
          </Row>
        </Container>
      </section>

      {
        categoryProd.map(item => <ListProduct
          key={item.title}
          title={item.title}
          items={item.items}
        />)
      }

    </Helmet>
  )
}

export default Home