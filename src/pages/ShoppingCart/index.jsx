import React from 'react'
import ShopCart from '../../components/CityHeader'
import ShopCatList from './ShopCatList/index';
export default function ShoppingCart() {
  return (
    <div>
        <ShopCart title='购物车'/>
         <ShopCatList/>
    </div>
  )
}
