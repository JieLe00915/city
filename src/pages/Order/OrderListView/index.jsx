import React from 'react'
import Item from './Item';
export default function OrderListView(props) {
    // console.log(props.data);
  return (
    <div>
        {
            props.data.map((ele,index) => { 
                return <Item key={index} data={ele} user={props.user}></Item>
             })
        }
    </div>
  )
}
