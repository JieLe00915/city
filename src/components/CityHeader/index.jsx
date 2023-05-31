import React from 'react'
import './style.less'
import {useNavigate} from 'react-router-dom'
export default function CityHeader(props) {
    const navigate=useNavigate()
    function backHandle() {
        // 第一种 window自带
        // window.history.back();
        // 第二种 编程式路由
        navigate(-1)
        // 第三种  传入参数props  调用 withRouter (路由6  弃用了)  包裹组件
        // props.history.go(-1)
    }
    return (
        <div id="common-header">
            <span className="back-icon" onClick={backHandle}>
                <i className="icon-chevron-left"></i>
            </span>
            <h1>{props.title}</h1>
        </div>
    )
}
