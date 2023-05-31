import React from 'react'
import LoginView from './LoginView'
import {setLogin} from '../../redux/actions/login';
import {useDispatch} from 'react-redux'
export default function Login() {
  const dispatch=useDispatch()
  function loginView(user) {
    // console.log(user);
    // 将数据传入redux中 返回上一级
    dispatch(setLogin(user))

    // 数据持久化 存到本地
    localStorage.setItem("goodlive",JSON.stringify(user))

    window.history.back()
  }
  return (
    <div>
        <LoginView loginHandle={loginView}/>
    </div>
  )
}
