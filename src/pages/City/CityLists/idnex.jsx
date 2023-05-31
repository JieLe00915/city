import React, { useState,useEffect } from 'react'
import CitySelect from 'react-city-select'
import cityData from '../../../data/city'
import {useNavigate} from 'react-router-dom'
import api from '../../../api'
import './style.less'
export default function CityLists(props) {
    const navigate=useNavigate()
    const [cityDatas, seCityData] = useState(cityData)
    // 调用回调函数
    function handleSelectCity(cityData) {
        props.getCityList(cityData.name)
        navigate('/home')
    }

    //获取城市列表 
    useEffect(async() => { 
        const res=await api.getCityList()
        if(res.status==200){
            seCityData(res.data.result.citylist)

        }
     },[])

    return (
        <div className="citylists">
            <h3>城市列表</h3>
            <CitySelect
                data={cityDatas}
                // 传入回调
                onSelectItem={handleSelectCity}>
            </CitySelect>
        </div>
    )
}
