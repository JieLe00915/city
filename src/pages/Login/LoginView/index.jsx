
import React,{useState} from 'react'
import './style.less'
import api from '../../../api'
import images from '../../../assets/images/01.png'
import validator from '../../../utils/validator';
import classNames from 'classnames';
export default function LoginView(props) {
    const [username,setUserName]=useState('')
    const [password,setPassWord]=useState('')
    const [errorsa,setErrors]=useState({})

    const onSubmitHandle = async(e) =>{
        e.preventDefault()
        var {isValid,errors}=validator({
            username,
            password
        })
        if (!isValid) {
            const  res =await api.getLogin({username,password})
            if (res.status==200) {
                // console.log(res);
                // 登录成功后 将数据返回上一级
               props.loginHandle(res.data)
                // 将错误指为空
                setErrors({})
            }else{
                console.log("登陆失败");
            }
        }else{
            // 将错误的返回给
            setErrors(errors)
            console.log();
        }

        // 进行正则判断
        // const pattern = /[\u4e00-\u9fa5]||[0-9]{1,20}/;
        // if (pattern.test(username)&&username!='') {
        //     console.log(username,password);
            // const  res =await api.getLogin({username,password})
            // if (res.status==200) {
            //     // 登录成功后 将数据返回上一级
            //    props.loginHandle(res.data)
            // }
        // }else{
        //     alert("账号输入格式不对")
        // }
      
    } 
    function changeHandle(e) {

        if (e.target.name==='username') {
                setUserName(e.target.value)
        }
        if (e.target.name==='password') {
            setPassWord(e.target.value)
        }
    }
    return (
        <div className='warp'>
            <img src={images} alt="" />
            <div id="login-container">
                <form onSubmit={onSubmitHandle} method='POST'>
                    <div className={errorsa.username?'input-container-error phone-container':'input-container phone-container'}>
                        <i className="icon-tablet"></i>
                        <input
                            type="text"
                            name="username"
                            placeholder="用户名/手机号"
                            value={username}
                        onChange={changeHandle}
                        />
                    </div>
                    <p style={{color:'red'}}>{errorsa.username}</p>
                    {/* classnames  二选一 */}
                    <div className={classNames('input-container password-container',{'input-container-error':errorsa.password})}>
                        <i className="icon-key"></i>
                        <button>发送验证码</button>
                        <input
                            type="password"
                            name="password"
                            placeholder="输入验证码"
                        value={password}
                        onChange={changeHandle}
                        />
                    </div>
                    <p style={{color:'red'}}>{errorsa.password}</p>
                    <button className="btn-login">登录</button>
                </form>
            </div>
        </div>

    )
}
