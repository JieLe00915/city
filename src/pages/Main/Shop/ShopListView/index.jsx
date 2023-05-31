import React from 'react'
import './style.less'
export default function ShopListView(props) {
    const {data,title}=props
  return (
    <div className="Shop-hot">
    <h3>{title}</h3>
    <div className="hot-container">
      <ul className="clear-fix">
            {
                data.map((ele,index) => { 
                    return <li key={index}>
                            <a href="#">
                               <img src={ele.img} alt="" />
                               <span>{ele.title}</span>
                                </a>
                        
                        </li>
                 })
            }


   

      </ul>
    </div>
  </div>

  )
}
