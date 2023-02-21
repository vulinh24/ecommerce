import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import ProductCard from '../product/ProductCard'


const ListProduct = (props) => {
  return (
    <section className='list_product'>
      <Container>
        <Row>
                <Col lg='12' style={{textAlign: 'center'}}>
            <h2>{props.title}</h2>
          </Col>
        </Row>
            <Row>
              {props.items.map((item, i) => <ProductCard key={i} product={item}/>)}
            </Row>
      </Container>
    </section>

  )
}

export default ListProduct