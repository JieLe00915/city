
import Home from '../pages/Main/Home'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User/idnex'
import LifeServerice from '../pages/Main/LifeServerice/index'
import City from '../pages/City/index';
import Main from '../pages/Main'
import Serch from '../pages/Serch'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Order from '../pages/Order'
import ShoppingCart from '../pages/ShoppingCart'
import Collect from '../pages/Collect'
import {Navigate} from 'react-router-dom'
export default [
    {
        path:'collect',
        element:<Collect/>
    },
    {
        path:'shopcart',
        element:<ShoppingCart/>
    },
    {
        path:'order',
        element:<Order/>
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'/details/:id',
        element:<Details/>
    },
    {
        path:'/serch',
        element:<Serch/>
    },
    {
        path:'/city',
        element:<City/>
    },
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/user',
                element:<User/>
            },
            {
                path:'/life',
                element:<LifeServerice/>
            },
            {
                path:'/',
                element:<Navigate to="/home"/>
              },
        ]
    },
   


]