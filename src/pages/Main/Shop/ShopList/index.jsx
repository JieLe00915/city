import React,{useEffect,useState}from 'react'
import ShopListView from '../ShopListView';
import api from '../../../../api';
export default function ShopList() {

    const [ShopState1,SetShopState1]=useState([])
    const [ShopState2,SetShopState2]=useState([])
    useEffect( async() => { 
        const res=await api.getHomeHot1()
        // console.log(res);
        SetShopState1(res.data.result)
     },[])
     useEffect( async() => { 
        const res=await api.getHomeHot2()
        // console.log(res);
        SetShopState2(res.data.result)
     },[])


  return (
    <div>
        {
            ShopState1.length?
            <ShopListView  data={ShopState1} title="热销产品"/>:
            <div>数据加载中...</div>
        }
            {
            ShopState2.length?
            <ShopListView  data={ShopState2} title="家庭常用"/>:
            <div>数据加载中...</div>
        }
    </div>
  )
}
