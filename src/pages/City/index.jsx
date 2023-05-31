import React ,{useState}from 'react'
import CityHeader from '../../components/CityHeader/index'
import CurrentCity from '../City/CurrentCity';
import CityList from './CityList/index';
import CityLists from './CityLists/idnex'
// 引用redux
import {useDispatch,useSelector} from 'react-redux';
// 引用redux  action
import {initCity,changeCity} from '../../redux/actions/city'

export default function City() {
  
  const diapatch=useDispatch()
  const city=useSelector((state) =>state.city)


  function getCityList(city) {
    //调用 action 的方法 传递 city名字
    diapatch(changeCity(city))
  }
  return (
    <div>
      <CityHeader title="当前城市"/>
      <CurrentCity city={city.cityName}/>
      <CityList getCityList={getCityList}/>
      <CityLists getCityList={getCityList}/>
    </div>
  )
}
