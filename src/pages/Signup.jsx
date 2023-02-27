import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import '../style/login.css'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        <Helmet title='Sign up'>
            <section>
                <Container>

                    <Row className='login__section'>
                        <h1>Login</h1>
                        <Col lg='6'>
                            <div className="login__form">
                                <form className='form'>

                                    <input
                                        type="text"
                                        placeholder='Username'
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />

                                    <input
                                        type="text"
                                        placeholder='Email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />

                                    <input
                                        type="password"
                                        placeholder='Password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />

                                    <button>Create an account</button>
                                    <p>
                                        Already have an account? <span><NavLink to='/login'>Sign in</NavLink></span>
                                    </p>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup