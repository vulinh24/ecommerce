import React from 'react'
import {Col} from 'reactstrap'
import '../../../style/productCard.css'
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Col lg='3'>
        <div className="product__item">
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
                <span className="add__cart" title='add to cart'>
                <i className="ri-add-circle-fill"></i>
                </span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard