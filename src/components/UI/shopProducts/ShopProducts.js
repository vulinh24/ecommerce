import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import ProductCard from '../product/ProductCard'

const ShopProducts = ({ products }) => {

    return (
        <section className='shop_products'>
            <Container>
                <Row>
                    {products.map((item, i) => <ProductCard key={i} product={item} />)}
                </Row>
            </Container>
        </section>
    )
}

export default ShopProducts