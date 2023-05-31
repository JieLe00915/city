import React from 'react'
import './style.less'
import msg from '../../../assets/images/消息.png'
import set from '../../../assets/images/开关.png'
import {useDispatch,useSelector} from 'react-redux'
import {outLogin} from '../../../redux/actions/login'
import {cleatCollect} from '../../../redux/actions/collect'
import UserBody from '../../../components/UserBody';
export default function User() {
  const dispath=useDispatch()
  const id=useSelector(state=>state.collect)
// 退出
function removeLogin() {
   dispath(cleatCollect())
   dispath(outLogin())
   localStorage.removeItem('goodlive')

}
  return (
    <div className='warp'>
      <div className='header'>
        <div className='header-one'>
          <p><img src={msg} alt="" /></p>
          <p><img src={set} alt="" onClick={removeLogin}/></p>
        </div>
        <div className='header-img'></div>
      </div>

      <UserBody />
    </div>
  )
}
