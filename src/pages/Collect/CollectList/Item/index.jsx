import React from 'react'
import { Link } from 'react-router-dom'
import './style.less';
export default function Item(props) {
    const data = props.data
    // console.log(data);
    // console.log(data.id);
    return (
        <div className="list-item">
            {
                data?
                    <Link to={`/details/${data.id}`}>
                        <img src={data.img} alt="" />
                        <div className="mask">
                            <div className="left">
                                <p>{data.title}</p>
                                <p>{data.houseType}</p>
                            </div>
                            <div className="right">
                                <div className="btn">
                                    {data.rentType}
                                </div>
                                {/* 解析数据中的html标签结构 */}
                                <p dangerouslySetInnerHTML={{ __html: data.price + "元/月" }}></p>
                            </div>
                        </div>

                    </Link> 
                  :<div>你还未收藏房屋...</div>

            }

        </div>
    )
}
