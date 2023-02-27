import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../style/login.css'
import request from '../utils/request'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import userSlice from '../redux/userSlice'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      

      // console.log(loading)
      const res = await request.post('/auth/login', {
        username: "mor_2314",
        password: "83r5^_"
      });
      // console.log('api done...................')
      console.log('emaillll',email)
      const user = {username : email, avatar: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'}
      dispatch(userSlice.actions.updateCurrentUser(user))
      localStorage.setItem('user', JSON.stringify(user))
      toast.success('login successfully')
      navigate('/')
    } catch (error) {
      setLoading(false)
      toast.error('something went wrong')
    }

  }

  // useEffect(() => {
  //   console.log('loading state......', loading)
  // }, [loading])

  return (
    <Helmet title='Login'>
      {
          <section>
            <Container>

              <Row className='login__section'>
                <h1>Login</h1>
                <Col lg='6'>
                  <div className="login__form">
                    <form className='form'  onSubmit={(e) => singin(e)}>
                      <input
                        type="text"
                        placeholder='Enter your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />

                      <input
                        type="password"
                        placeholder='Enter your password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />

                      <button>{loading ? <span className="spinner-border text-primary"></span> : <span>Login</span>}</button>
                      <p>
                        Not have an account? <span><NavLink to='/register'>Sign up</NavLink></span>
                      </p>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
      }
    </Helmet>
  )
}

export default Login