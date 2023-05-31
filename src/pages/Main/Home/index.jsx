import React from 'react'
import { Link } from 'react-router-dom'
import './style.less'
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'
import banner3 from '../../../assets/images/banner3.png'
import Swiper from '../../../components/Swiper'
import HomeList from './HomeList'
import SerchInput from '../../../components/SerchInput'
// 引入redux
import { useSelector } from 'react-redux'

export default function Home() {
    // 调用reducer里面的数据
    const city = useSelector((state) => state.city)
    return (
        <div>
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{city.cityName}</span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/order">
                        <i className="iconfont icon-car"></i>
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
            <HomeList cityName={city.cityName} />
        </div>

    )
}
