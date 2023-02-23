import React, { useContext } from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { CartContext } from '../../store/CartContext'

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/shop',
        display: 'Shop'
    },
    {
        path: '/cart',
        display: 'Cart'
    }
]

const Header = () => {
    const [cart, dispatch] = useContext(CartContext)

    // console.log(cart);
    return (
        <header className='header'>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <h1>Special Shop</h1>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                {
                                    navLinks.map(item => (
                                        <li className="nav__item" key={item.path}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav__icons">

                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">10</span>
                            </span>

                            <span className="cart__icon">
                                <NavLink to={'/cart'}>
                                    <i className="ri-shopping-cart-2-line"></i>
                                    <span className="badge">{cart.totalQuantity}</span>
                                </NavLink>
                            </span>
                            <span>
                                <img src={userIcon} alt="userIcon" />
                            </span>
                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header