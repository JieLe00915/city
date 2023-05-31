import React, { useEffect, useRef, useState } from 'react'
import './style.less'
export default function LoadMore(props) {
    const more = useRef()
    const [loadTop, setLoadTop] = useState(10000)
    //1.0 防抖
    // function fandou() {
    //     let timer=null;
    //     return (callback) => {
    //         clearTimeout(timer)
    //         timer=setTimeout(() => {
    //             callback()
    //         }, 1000);
    //     }
    // }
    // const Func=fandou()

    // useEffect 数据没有发生变化 就读缓存 
    useEffect(() => {
        //2.0 防抖
        let timer = null
        // 获取视口高度
        let winHeight = document.documentElement.clientHeight
        // getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。getBoundingClientRect是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）。
        // window.addEventListener('scroll', () => {
        //     if (more.current) {
        //         const moreHeight = more.current.getBoundingClientRect().top
        //         setLoadTop(moreHeight)
        //         // //2.0 防抖
        //         if (timer) {
        //             clearTimeout(timer)
        //         }else{
        //             timer = setTimeout(() => {
        //                 if (winHeight > loadTop) {
        //                    props.onLoadMore()
        //                 }
        //             }, 1000);
        //         }
        //         //1.0 防抖
        //         //   console.log(winHeight,moreHeight);
        //         // if(winHeight>moreHeight) {
        //         //     Func(() => {  
        //         //         console.log(111);
        //         //         props.onLoadMore() })

        //         // }
        //     }
        // })
        window.addEventListener('scroll', scorllHandle)
        function scorllHandle() {
            if (more.current) {
                const moreHeight = more.current.getBoundingClientRect().top
                setLoadTop(moreHeight)
                // //2.0 防抖
                if (timer) {
                    clearTimeout(timer)
                } else {
                    timer = setTimeout(() => {
                        if (winHeight > loadTop) {
                            props.onLoadMore()
                            
                        }
                    }, 1000);
                }
            }
        }
        // 在组件销毁前 移除 滚动事件
        return () => {
            window.removeEventListener('scroll',scorllHandle)
            // clearTimeout(timer)
        }
    }, [loadTop])

    return (
        <div className='load' ref={more}>加载更多...</div>
    )
}
