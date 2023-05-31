import React ,{useState,useEffect}from 'react'
import './style.less'
import {useNavigate,Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {setCollect,removeCollect} from "../../../redux/actions/collect"
export default function BuyAndStoreView(props) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [isCollect,setIsCollect] = useState(false)
    function storeHandle() {
         // 已经等录 
      
        if (props.user.token!='') {
             /**
             * 判断用户是否收藏
             *  1. 收藏则取消收藏
             *  2. 为收藏则收藏
             */
              if(isStore()){
                setIsCollect(false)
                // 已收藏
                dispatch(removeCollect(props.id))
                alert("取消收藏")
               
            }else{
                setIsCollect(true)
                // 未收藏
                dispatch(setCollect(props.id));
                alert("收藏成功")
            }
          
        }else{
            // 请登录
            navigate("/login")
        }
    }
        //页面初始渲染  如果在登录状态 则赋予按钮 状态为真 处于收藏状态
        useEffect(() => { 
            setIsCollect(isStore())
         },[])
    /**
     * 用户收藏判定
     * return boolean
     *     true:收藏
     *     false:未收藏
     */

function isStore() {
    let collect=props.collect;
    let id=props.id
    return collect.some(item=>{
        return item==id
    })
}


    return (
        <div className="buy-store-container clear-fix">
            <div className="item-container float-left">
                {
                    isCollect?  <button className="selected o" onClick={storeHandle}>已收藏</button>:
                    <button className="selected" onClick={storeHandle}>收藏</button> 
                   
                }
               
               
            </div>

            <div className="item-container float-right">
                <Link to={"/shopcart"}>
                    <button className="selected">购买</button>
                </Link>
               
            </div>
        </div >
    )
}
