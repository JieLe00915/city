import React from 'react'
import Item from './Item/idnex'
export default function SerchView(props) {
    // console.log(props);
  return (
    <div>
        {
            props.search.map((ele,index) => { 
                return  <Item  data={ele} key={index}/>
             })
        }
    </div>
  )
}
