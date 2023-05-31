import React from 'react'
import './style.less'
export default function Usertodo(props) {
  return (
    <div className="userinfo-container">
    <p>
        <i className="icon-user"></i>
        <span>{props.user.nick}</span>
    </p>
    <p>
        <i className="icon-map-marker"></i>
        <span>{props.city}</span>
    </p>
</div>
  )
}
