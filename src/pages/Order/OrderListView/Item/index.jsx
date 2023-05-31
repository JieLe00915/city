import React, { useEffect, useState,useRef } from 'react'
import './style.less'
import api from '../../../../api'
export default function Item(props) {
    const data = props.data
    const [currentComment, setCurrentComment] = useState(0)
    const text=useRef()
    useEffect(() => { 
        setCurrentComment( data.commentState)
    },[])
    function clickHandle() {
        setCurrentComment(1)
    }
    function onSubmitHandle() {
        api.getSubmitComment({
            id:data.id,
            username:props.user.nick,
            content:text.current.value
        }).then((res) => {
            setCurrentComment(2)
        }).catch((err) => {
            console.log(err);
        });
    }
    function onCancelHandle() {
        setCurrentComment(0)
    }

    return (
        <div className="order-item-container clear-fix">
            <div className="order-item-img float-left">
                <img src={data.img} alt="" />
            </div>
            <div className="order-item-comment float-right">

                {
                    currentComment === 0 ?
                        <button className="btn" onClick={clickHandle}>评价</button> :
                        currentComment === 1 ? '' :
                            <button className="unseleted-btn btn" disabled>已评价</button>
                }
            </div>
            <div className="order-item-content">
                <span>商户：{data.title}</span>
                <span>类型：{data.houseType}</span>
                <span>价格：{data.price}</span>
            </div>
            {
                currentComment === 1 ?
                    <div className="comment-text-container">
                        <textarea ref={text} className="comment-text" style={{ width: "100%", height: '80px' }}></textarea>
                        <button onClick={onSubmitHandle} className="btn">提交</button>
                        <button onClick={onCancelHandle} className="btn unseleted-btn">取消</button>
                    </div>
                    : ''

            }
        </div>
    )
}
