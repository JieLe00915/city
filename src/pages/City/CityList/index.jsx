import React,{useEffect,useState} from 'react'
import "./style.less"
import {useNavigate} from 'react-router-dom'
import api from '../../../api/index'

export default function CityList(props) {
    const navigate=useNavigate()
    const[city,setCity]=useState([])
    useEffect(async () => { 
        const res=await api.getCity()
        setCity(res.data.result)
     },[])

    //  将点击的城市名字传给city
    function clickCityHandle(city) {
        props.getCityList(city)
        navigate('/home')
    }
  return (
    <div className="city-list-container">
    <h3>热门城市</h3>
    <ul className="clear-fix">
        {
            city.map((ele) => { 
                return <li key={ele.id} onClick={() =>  clickCityHandle(`${ele.city}`) }>
                    <span>{ele.city}</span>
                    </li>
             })
        }
    </ul>
</div>
  )
}
