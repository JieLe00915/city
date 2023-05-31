import React,{useState,useEffect} from 'react'
import api from '../../../../api';
import Homeview from '../Homeview'
export default function HomeList(props) {

    const [host1,setHost1]=useState([])
    const [host2,setHost2]=useState([])
    const [city,setCity]=useState(props.cityName)


    useEffect(async () => { 
       const res= await api.getHomeHot1({
        cityName:props.cityName
       })
       if (res.status==200) {
           setHost1(res.data.result)
           setCity(res.data.city)
       }
     },[])
     useEffect(async () => { 
        const res= await api.getHomeHot2({
          cityName:props.cityName
        })
        if (res.status==200) {
            setHost2(res.data.result)
            setCity(res.data.city)
        }
      },[])
      
  return (
    <div>
        {
            host1.length>0?
            <Homeview data={ host1 } title={ '热门商品' } city={city}/> : <div>等待数据加载</div>
        }
          {
            host2.length>0?
            <Homeview data={ host2 } title={ '新品推荐' } city={city}/> : <div>等待数据加载</div>
        }
        
    </div>
  )
}
