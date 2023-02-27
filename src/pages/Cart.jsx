import React, { useContext } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import imgShop from '../assets/images/shop.png'
import '../style/cart.css'
import { CartContext } from '../store/CartContext'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'

const Cart = () => {

    const [cart, dispatch] = useContext(CartContext)

    const removeCart = (item) => {
        toast.success('Delete successfully')
        const action = {
            type: 'addCart',
            payload: item
        };
        dispatch(action)
    }

    const changeQuantity = (item) => {
        const action = {
            type: 'addCart',
            payload: item
        };
        dispatch(action)
    }

    const checkOut = () => {
        if (cart.prods.length === 0) {
            window.alert("Your cart is empty!")
        } else {
            window.alert("Checkout successfully!")
            dispatch({ type: 'checkout' })
        }
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
                                                    <span className='change_quantity' onClick={e => changeQuantity({ ...item, quantity: -1 })}><i className="ri-subtract-line">
                                                    </i></span>
                                                    <span class="prod__quantity">{item.quantity}</span>
                                                    <span className='change_quantity' onClick={e => changeQuantity({ ...item, quantity: 1 })}><i className="ri-add-line">
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
                                <span>${cart.totalAmount.toFixed(2)}</span>
                            </div>
                            <div className='cart__button'>
                                <NavLink to='/shop'>Continue Shopping</NavLink>
                                <button onClick={e => checkOut()}>Checkout</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Cart