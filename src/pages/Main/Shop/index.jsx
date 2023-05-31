import React from 'react'
import './style.less';
import banner1 from '../../../assets/images/banner3.png'
import banner2 from '../../../assets/images/banner1.png'
import banner3 from '../../../assets/images/banner4.png'
import banner4 from '../../../assets/images/购物车.png'
import SerchInput from '../../../components/SerchInput';
import Swiper from '../../../components/Swiper';
import {Link} from 'react-router-dom';
import ShopList from './ShopList';
export default function Shop() {
  return (
    <div className='warp'>
      <div id="Shop-header" className="clear-fix">
        <div className="home-header-left float-left">
          <i className="icon-angle-down"></i>
        </div>
        <div className="home-header-right float-right">
          {/* <i className="iconfont icon-car"></i> */}
            <Link to='/shopcart'>
            <img src={banner4} alt="" />
            </Link>
         
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <SerchInput />
          </div>
        </div>
      </div>
      <Swiper banners={[banner1, banner2, banner3]} />
      <div className='ShopBody'>
        <p>新品上市</p>
        <p>二手商城</p>
      </div>
      <ShopList />

    </div>
  )
}
