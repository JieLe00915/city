import React,{useState} from 'react'
import './style.less'
/**
 * tabs视图结构
 * 
 * 使用结构：
 * <Tabs>
 *     <Tab lable="详情">
 *         <div>
 *             <h3>详情信息</h3>
 *         </div>
 *     </Tab>
 *     <Tab label="评价">
 *         <div>评价信息</div>
 *     </Tab>
 * </Tabs
 * 
 * 
 * 渲染结构：
 * <ul>
 *    <li>详情</li>
 *    <li>评价</li>
 * </ul>
 * <div>详情信息</div>
 * <div>评价信息</div>
 * 
 */

/* 
    重点:
        1.0  获取组件里面的东西  this.props.children
        2.0  React.Children.map  遍历tabs视图结构
        3.0  elemenet相当于一个 外层div
        4.0 props.children 所有外层元素div
*/
export default function Tabs(props) {
    const [currentIndex,setIndex]=useState(0)
    //获取点击的 index值 
    function tabClickHandle(index) {
        setIndex(index)
    }
  return (
    <div>
          <ul className="Tab_title_wrap">
                {
                    React.Children.map(props.children,(element,index) =>{
                        return <li onClick={()=>{tabClickHandle(index)}} className={currentIndex==index?'Tab_title active':"Tab_title"} key={index}>{ element.props.label }</li>
                    })
                }
            </ul>
            <div>
                {
                    React.Children.map(props.children,(element,index)=>{
                        return <div>{currentIndex==index? element.props.children:''}</div>
                    })
                }
            </div>
    </div>
  )
}
