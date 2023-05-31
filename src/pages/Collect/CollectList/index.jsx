import React, { useEffect, useState } from 'react'
import api from '../../../api'
import Item from './Item'
import { useSelector } from 'react-redux';
export default function CollectList() {
    const [CollectState, SetCollectState] = useState([])
    const id = useSelector(state => state.collect)
    // console.log(id);
    useEffect(async () => {
        const res = await api.getSearch()
        SetCollectState(res.data.result.data)
    }, [])
    const Collect = CollectState.filter((ele, index) => {
        return ele.id == id[index]
    })
    // console.log(Collect);
    return (
        <div>
            {
                Collect.map((ele, index) => {
                    return <Item data={ele} key={index} />
                })
            }
        </div>
    )
}
