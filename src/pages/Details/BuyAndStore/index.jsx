import React from 'react'
import BuyAndStoreView from '../BuyAndStoreView'
import './style.less'
import {useSelector} from 'react-redux'
export default function BuyAndStore(props) {
  const login=useSelector(state=>state.login)
  const collect=useSelector(state=>state.collect)
  // console.log(collect);
  return (
    <div className='buy-and-store'>
        <BuyAndStoreView 
            user={login.user} 
            collect={collect}
            id={props.id}
            />
    </div>
  )
}
