import React from 'react'
import './style.less'
import { Link } from 'react-router-dom';
export default function UserBody() {
    return (
        <div>
            <div className="UserBody">
                <div className="hot-container">
                    <ul className="clear-fix">
                        <li>
                            <div>
                                <i className='iconfont  icon-youhuijuan'></i>
                            </div>
                            <p>优惠卷</p>
                        </li>

                        <li>
                            <Link to={'/collect'}>
                                <div>
                                    <i className='iconfont  icon-jushoucang'></i>
                                </div>
                                <p>收藏</p>
                            </Link>

                        </li>
                        <li>
                            <div>
                                <i className='iconfont  icon-shizhong'></i>
                            </div>
                            <p>约看</p>
                        </li>

                        <li>
                            <div>
                                <i className='iconfont  icon-dingdan'></i>
                            </div>
                            <p>订单</p>
                        </li>



                        <li>
                            <div>
                                <i className='iconfont  icon-24gl-headphones'></i>
                            </div>
                            <p>私人助理</p>
                        </li>

                        <li>
                            <div>
                                <i className='iconfont  icon-weixin'></i>
                            </div>
                            <p>微聊</p>
                        </li>

                        <li>
                            <div>
                                <i className='iconfont  icon-pingjia'></i>
                            </div>
                            <p>评价</p>
                        </li>
                        <li>
                            <div>
                                <i className='iconfont  icon-fuzhi'></i>
                            </div>
                            <p>投诉建议</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="UserBody">
                <div className="hot-container">
                    <ul className="clear-fix">
                        <li>
                            <div>
                                <i className='iconfont  icon-hetong'></i>
                            </div>
                            <p>我的合同</p>
                        </li>
                        <li>
                            <div>
                                <i className='iconfont  icon-zufang'></i>
                            </div>
                            <p>转租</p>
                        </li>
                        <li>
                            <div>
                                <i className='iconfont  icon-fangzi'></i>
                            </div>
                            <p>退租</p>
                        </li>

                        <li>
                            <div>
                                <i className='iconfont  icon-dingdan'></i>
                            </div>
                            <p>评价</p>
                        </li>



                        <li>
                            <div>
                                <i className='iconfont  icon-dingdangdaizhimaxinyongshouquan'></i>
                            </div>
                            <p>芝麻信用</p>
                        </li>

                        <li>
                            <div>
                                <i className='iconfont  icon-zufang'></i>
                            </div>
                            <p>续租</p>
                        </li>

                        <li>
                            <div>
                                <i className='iconfont icon-wj-zd'></i>
                            </div>
                            <p>账单</p>
                        </li>
                        <li>
                            <div>
                                <i className='iconfont  icon-24gl-headphones'></i>
                            </div>
                            <p>助理</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>


    )
}
