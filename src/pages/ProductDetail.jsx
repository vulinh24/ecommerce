import React, { useContext, useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import request from '../utils/request';
import { Col, Container, Row } from 'reactstrap';
import imgShop from '../assets/images/shop.png'
import '../style/shop.css'
import '../style/detail.css'
import { CartContext } from '../store/CartContext';
import {toast} from 'react-toastify';
import ListProduct from '../components/UI/category/ListProduct';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [tab, setTab] = useState('desc')
    const [cart, dispatch] = useContext(CartContext);
    const [relaProd, setRelaProd] = useState([])

    const addToCart = () => {
        toast.success('Add to cart successfully!');
        return {
            type: 'addCart',
            payload: {...product, quantity : 1}
        };
    }

    useEffect(() => {
        const init = async () => {
            window.scrollTo(0, 0, 0);
            const getProduct = await request.get(`/products/${id}`);
            const prod = getProduct.data;
            const getRelaProd = await request.get(`/products/category/${prod.category}`)
            setProduct(prod);
            setRelaProd(getRelaProd.data);
        }
        init()
    }, [id])
    return (
        <Helmet title={product.title}>
            <Row>
                <div className="banner__cover"></div>
                <div className="banner__shop">
                    <img src={imgShop} alt="img shop" />
                    <p>SHOP</p>
                </div>
            </Row>

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="productdetail__image">
                                <img src={product.image} alt="productimage" />
                            </div>
                        </Col>
                        <Col lg='6'>
                            <h2>{product.title}</h2>
                            <div className="product__rating">
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-half-s-fill"></i>
                                <span style={{ marginLeft: '10px' }}>(5 ratings)</span>
                            </div>
                            <div className="product__price"> ${product.price}</div>
                            <div className="product__desc">
                                {product.description}
                            </div>
                            <button className='addcart__btn' onClick={e => dispatch(addToCart())}>Add to cart</button>
                        </Col>

                    </Row>
                </Container>
                <section>
                    <Container>
                        <Row>
                            <div className='tab__switch' >
                                <span className={tab === 'desc' ? 'active__tab' : ''} onClick={e => setTab('desc')}>Description</span>
                                <span className={tab === 'review' ? 'active__tab' : ''} onClick={e => setTab('review')}>Reviews(1)</span>
                            </div>
                        </Row>
                        <Row>
                            <div className='tab__content'>
                                {
                                    (tab === 'desc') ? <p>{product.description}</p> : ''
                                }
                                {
                                    (tab === 'review') ? (
                                        <div className='tab__review'>
                                            <textarea placeholder='enter your review here!'></textarea>
                                            <button>Submit</button>
                                        </div>
                                    ) : ''
                                }
                            </div>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Row>
                        <ListProduct 
                            title='Related Products'
                            items = {relaProd}
                        />
                    </Row>
                </section>
            </section>
        </Helmet>
    )
}

export default ProductDetail