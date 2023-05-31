import React ,{useState,useEffect}from 'react'
import "./style.less"
import {useNavigate,useLocation} from 'react-router-dom'
// 引用redux
import {useDispatch,useSelector} from 'react-redux'
import {updaetSearch} from '../../redux/actions/search'


export default function SerchInput() {
  const [keywords,setKeyWords]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()
 
   // redux 里面拿 搜索的关键词
   const reduxKeywords = useSelector(state => state.search)
   // console.log(reduxKeywords);

   // 路由参数 每次更新传送的 state的参数  这里不能使用  因为 为null
   // const {state}=useLocation()
   // console.log(state);
  // 编程式路由传递参数
  function keyUpHandle(e) {
     if (e.keyCode===13&&e.target.value!='') {
        dispatch(updaetSearch(keywords))
        navigate("/serch",{
          replace:false,
          state:{
           keyWords:keywords
          }
        })
     }
     
  }
  function changeHandle(e) {
   setKeyWords(e.target.value)
  }


//   搜索关键词回传监听  
useEffect(() => { 
   setKeyWords(reduxKeywords.search)
 },[reduxKeywords.search])

  return (
         <input 
            className="search-input"
            type="text"
            onKeyUp={keyUpHandle}
            onChange={ changeHandle }
            value={keywords}
            placeholder="搜索"
        />
    
  )
}
