import React,{useState} from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './style.less'
import Pagination from '../Swiper/Pagination/index';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export default function Swiper(props) {

    const [index,setIndex]=useState(0)

    // 实现轮播图的运转 不断更新
    function handleChangeIndex(index ) {
     setIndex(index)

}
  return (
    <div className='swiper'>
         <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                {
                    props.banners.map((ele,index)=>{
                        return  <div className='swiper-view' key={index}>
                        <img src={ele} alt="" />
                    </div>
                    })
                }
        </AutoPlaySwipeableViews>
    <Pagination  len={props.banners.length} currentIndex={index}/>
    </div>
  )
}
