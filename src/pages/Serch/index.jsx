import React from 'react'
import {useLocation} from 'react-router-dom'
import SearchList from './SearchList/idnex';
import SearchHead from './SearchHead';
export default function Serch() {
    const {state:{keyWords}}=useLocation()

  return (
    <div>
      <SearchHead/>  
      <SearchList keyWords={keyWords} />
    </div>
  )
}
