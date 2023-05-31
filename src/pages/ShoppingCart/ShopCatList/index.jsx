import React, { useState, useEffect } from 'react'
import './style.less'
import img1 from '../../../assets/images/banner2.png';
import img2 from '../../../assets/images/banner3.png';
export default function ShopCatList() {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
    const [price, setPrice] = useState(0)
    const [price1, setPrice1] = useState(0)
    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    useEffect(() => {
        setNum(0)
        setNum1(0)
        setPrice(110)
        setPrice1(12000)
    }, [])
    useEffect(() => {
        console.log(num);
        if (num == 0) {
            setFlag(false)
        } else {
            setFlag(true)
        }
        if (num1 == 0) {
            setFlag1(false)
        } else {
            setFlag1(true)
        }

    }, [num, num1])
    useEffect(() => {
        if (flag && flag1) {
            setFlag2(true)
        } else {
            setFlag2(false)
        }
        if (!flag) {
            setNum(0)
        }
        if (!flag1) {
            setNum1(0)
        }
    }, [flag, flag1])

    // 减法1
    function minusHandle() {
        if (num < 1) {
            setNum(0)
            setFlag(false)
        } else {
            setPrice(price - 110)
            setNum(num - 1)
            // console.log(num)
            setFlag(true)
        }
    }
    // 加法
    function addHandle() {
        setNum(num => num + 1)
        setPrice((num + 1) * 110)
    }
    // 减法
    function minusHandle1() {
        if (num1 < 1) {
            setNum1(0)
        } else {
            setPrice1(price1 - 120)
            setNum1(num1 - 1)
        }

    }
    // 价格
    function addHandle1() {
        setNum1(num1 => num1 + 1)
        setPrice1((num1 + 1) * 120)
    }

    // 全选
    function CheckHandle(e) {
        // console.log(e.target.checked);
        setFlag(e.target.checked)
        setFlag1(e.target.checked)
        setFlag2(e.target.checked)
        setNum(1)
        setNum1(1)
    }
    // 第一个多选框
    function IputHandle(e) {
        setFlag(e.target.checked)
        setNum(1)
    }
    // 第二个多选框
    function Input1Handle(e) {
        setFlag1(e.target.checked)
        setNum1(1)
    }
    return (
        <div className='StopListWarp'>
            <ul className='StopList'>
                <li>
                    <input type="checkbox" checked={flag} onChange={IputHandle} />
                    <img src={img1} alt="" />
                    <div className='ShopPrice'>
                        <p>棕榈泉国际公寓2居室-南北</p>
                        <p>￥{price}.00</p>
                    </div>
                    <div className='ShopCount'>
                        <span onClick={minusHandle}>-</span>
                        <span>{num}</span>
                        <span onClick={addHandle}>+</span>
                    </div>
                </li>
                <li>
                    <input type="checkbox" name="" id="" checked={flag1} onChange={Input1Handle} />
                    <img src={img2} alt="" />
                    <div className='ShopPrice'>
                        <p>豪宅 · 使馆壹号院4居室-南</p>
                        <p>￥{price1}.00</p>
                    </div>
                    <div className='ShopCount'>
                        <span onClick={minusHandle1}>-</span>
                        <span>{num1}</span>
                        <span onClick={addHandle1}>+</span>
                    </div>
                </li>
            </ul>
            <div className='StopListFooter'>
                <input type="checkbox" onChange={CheckHandle} checked={flag2} />全选
                <p>合计:{price * num + price1 * num1} ￥</p>
                <div>结算({num+num1})</div>
            </div>
        </div>

    )
}
