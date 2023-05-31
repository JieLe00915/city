import React from 'react'
import "./style.less"
// import classnames from 'classnames';
export default function Pagination (props) {
    // 创建一个数组 并将元素全部填充为1
    let arr=new Array(props.len).fill(1)
    let currentIndex = props.currentIndex
    return(
        <div className="swiper-pagination">
            <ul>
              {
                  arr.map((ele,index) => {
                      return <li key={index} className={currentIndex === index? 'selected':''}></li>
                    })
              }
             
                {/*
                      第二种方法 下载classnames
                {
                    arr.map((ele,index) =>{
                        return <li className={ classnames({'selected':currentIndex === index})} key={index}></li>
                    })
                } */}
            </ul>
        </div>
  )
}
