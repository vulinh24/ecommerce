import React, { useContext } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import imgShop from '../assets/images/shop.png'
import '../style/cart.css'
import { CartContext } from '../store/CartContext'
import { toast } from 'react-toastify';

const Cart = () => {

    const [cart, dispatch] = useContext(CartContext)

    const removeCart = (item) => {
        toast.success('Delete successfully')
        dispatch(item)
    }

    return (
        <Helmet title='Cart'>

            <Row>
                <div className="banner__cover"></div>
                <div className="banner__shop">
                    <img src={imgShop} alt="img shop" />
                    <p>Cart</p>
                </div>
            </Row>

            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.prods.map(item => (
                                            <tr key={item.id}>
                                                <td><img src={item.image} alt="" /></td>
                                                <td>{item.title}</td>
                                                <td>
                                                    ${item.price.toFixed(2)}
                                                </td>
                                                <td>
                                                    <span className='change_quantity' onClick={e => dispatch({ ...item, quantity: -1 })}><i class="ri-subtract-line">
                                                    </i></span>
                                                    {item.quantity}
                                                    <span className='change_quantity' onClick={e => dispatch({ ...item, quantity: 1 })}><i class="ri-add-line">
                                                    </i></span>
                                                </td>
                                                <td onClick={e => removeCart({ ...item, quantity: -item.quantity })}><i className="ri-delete-bin-line delete__cart"></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </Col>

                        <Col lg='3'>
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>${cart.totalAmount}</span>
                            </div>
                            <div className='cart__button'>
                                <button>Continue Shopping</button>
                                <button>Checkout</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Cart