import React from 'react'
import LifeHeader from '../../../components/CityHeader';
import banner from '../../../assets/images/banner5.png'
import banner1 from '../../../assets/images/banner3.png'
import banner2 from '../../../assets/images/banner1.png'
import banner4 from '../../../assets/images/banner2.png'
import banner3 from '../../../assets/images/banner4.png'
import free1 from '../../../assets/images/功能.png'
import free2 from '../../../assets/images/电费.png'
import free3 from '../../../assets/images/水费.png'
import free4 from '../../../assets/images/网络.png'
import "./style.less"

export default function LifeSeverice() {
  return (
    <div className='warp'>
      <LifeHeader title="生活服务" />
      <div className='HeadImg'>
        <img src={banner1} alt="" />
      </div>
      <div className="LifeBody">
        <h1>生活缴费</h1>
        <div className="hot-container">
          <ul className="clear-fix">
            <li>
              <div>
                <img src={free3} alt="" />
              </div>
              <p>水费</p>
            </li>
            <li>
              <div>
              <img src={free2} alt="" />
              </div>
              <p>电费</p>
            </li>
            <li>
              <div>
              <img src={free4} alt="" />
              </div>
              <p>宽带</p>
            </li>
            <li>
              <div>
              <img src={free1} alt="" />
              </div>
              <p>更多</p>
            </li>
          </ul>
          
        </div>
      
        <ul className='LifeBodyTwo'>
          <li><img src={banner} alt="" /></li>
          <li><img src={banner1} alt="" /></li>
          <li><img src={banner2} alt="" /></li>
      </ul>
      <h1>热门推荐</h1>
          <ul className='LifeFoter'>
          <li><img src={banner} alt="" /></li>
          <li><img src={banner1} alt="" /></li>
          <li><img src={banner2} alt="" /></li>
          <li><img src={banner4} alt="" /></li>
          <li><img src={banner1} alt="" /></li>
          <li><img src={banner3} alt="" /></li>
          </ul>
      </div>

   

    </div>
  )
}
