import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Shop from '../pages/Shop'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/home'}></Navigate>}/>
            <Route path='home' element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='shop' element={<Shop />}></Route>
        </Routes>
    )
}

export default Routers;