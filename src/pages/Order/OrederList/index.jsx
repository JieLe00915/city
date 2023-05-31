import React, { useEffect, useState } from 'react'
import OrderListView from '../OrderListView'
import api from '../../../api';
export default function OrderLsist(props) {
    const [orderListData, setOrderListData] = useState([])

    useEffect(async () => {
        const res = await api.getCommentOrder({
            username: props.user.nike
        })
        if (res.status === 200) {
            // console.log(res.data.result);
            setOrderListData(res.data.result)
        }
    },[])


    return (
        <div>
            {
                orderListData.length > 0 ?
                <OrderListView data={orderListData} user={props.user}/> :
                <div>等待数据加载...</div>
            }

        </div>
    )
}
