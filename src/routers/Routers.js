import {Route, Routes, Navigate} from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/home'}></Navigate>}/>
            <Route path='home' element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Signup />}></Route>
            <Route path='shop' element={<Shop />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='product/:id' element={<ProductDetail />}></Route>
        </Routes>
    )
}

export default Routers;