import React, { useState } from 'react'
import './style.less'
import DefaultImg from '../../../../assets/images/01.png'
import { loadImageAsync } from '../../../../utils/loadImg'
import { Link } from 'react-router-dom';
export default function Item(props) {
    const data = props.data
    // 保存初始图片占位 在进行异步加载  替换初始图片
    const [currenImg, setCurrenImg] = useState(DefaultImg)
    loadImageAsync(data.img).then((result) => {
        setCurrenImg(result)
    }).catch((err) => {
        console.log(err);
    });
    return (

        <div className="list-item">
            <Link to={`/details/${data.id}`}>
                <img src={currenImg} alt="" />
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

        </div>
    )
}
