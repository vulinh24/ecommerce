import React, { useContext } from 'react'
import { Col } from 'reactstrap'
import '../../../style/productCard.css'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../../store/CartContext'
import {toast} from 'react-toastify';

const ProductCard = ({ product }) => {

    const [cart, dispatch] = useContext(CartContext)
    const navigate = useNavigate();
    const addToCart = (e) => {
        e.stopPropagation();
        toast.success('Add to cart successfully!');
        return {...product, quantity : 1};
    }

    const gotoDetail = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <Col lg='3'>
            <div className="product__item" onClick={e => gotoDetail(product.id)}>
                <div className="product__img">
                    <img src={`${product.image}`} alt="productimage" />
                </div>
                <div className="product__desc">
                    <h4 className='product__name'>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h4>
                    <p>
                        {product.description}
                    </p>
                </div>
                <div className="product__price">
                    <span className="price">${product.price}</span>
                    <span className="add__cart" title='add to cart' onClick={e => dispatch(addToCart(e))}>
                        <i className="ri-add-circle-fill"></i>
                    </span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard