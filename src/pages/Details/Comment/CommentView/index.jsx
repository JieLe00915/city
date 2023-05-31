import React from 'react'
import './style.less'
import Item from './Item';

export default function CommentView(props) {
  const data=props.data
  return (
    <div className='comment-list'>
    <ul>
      {
        data.map((ele,index)=>{
          return   <Item key={index} data={ele}></Item>
        })
      }

    </ul>
  
    </div>
  )
}
