import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsList from './DetailsList';
export default function Details() {
    const { id } = useParams()
    return (
        <div>
            <DetailsList  id={id}/>
        </div>
    )
}
