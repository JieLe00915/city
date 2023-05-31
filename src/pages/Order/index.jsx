import React,{useEffect} from 'react'
import OrderHeader from '../../components/CityHeader';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Usertodo from './Usertodo'
import OrederList from './OrederList'
export default function Order() {
    const city=useSelector((state) => state.city.cityName)
    const user=useSelector((state) => state.login.user)
    const navigate=useNavigate()
    useEffect(() => { 
            if (!user.token) {
                navigate('/login')
            }
     },[])
  return (
    <div>
        <OrderHeader  title='订单评价'/>
        <Usertodo city={city} user={user}/>
        <OrederList  user={user}/>
    </div>
  )
}
