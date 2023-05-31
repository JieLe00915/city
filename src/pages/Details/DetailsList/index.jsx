import React, { useState, useEffect } from 'react'
import api from '../../../api/index'
import DetailsView from '../DetailsView'
import DetailHeader from '../../../components/CityHeader'
export default function DetailsList(props) {
    const [detailsData, setDetailsData] = useState({})
    useEffect(() => {
        api.getDetails({ id: props.id }).then((res) => {
            setDetailsData(res.data)
        }).catch((err) => {
            console.log(err);
        });
    }, [])
    return (
        <div>

            <DetailHeader title='详情页' />
            {
                detailsData.imgs ?
                    <DetailsView detailsData={detailsData} id={props.id}/> :
                    <div>等待数据加载....</div>
            }

        </div>
    )
}
