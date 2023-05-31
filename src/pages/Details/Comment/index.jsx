import React, { useState, useEffect } from 'react'
import CommentView from './CommentView';
import api from '../../../api/index';
import LoadMore from '../../../components/LoadMore';
export default function Comment(props) {
  const [comment, setComment] = useState([])
  const [hasMore,setHasMore]=useState(false)

  useEffect(async () => {
    const res = await api.getComment({
      id: props.id
    })
    if (res.status == 200) {
      setComment(res.data.result.data)
      setHasMore(res.data.result.hasMore)
    }
  }, [])
  // console.log(hasMore);
  //加载更多
  const loadMoreHandle=async()=> {
    const res = await api.getComment({
      id: props.id
    })
    if (res.status == 200) {
      // console.log(111);
      setComment([...comment, ...res.data.result.data])
      setHasMore(res.data.result.hasMore)
    }
  }

  return (
    <div>
      {
        comment.length ?
          <CommentView data={comment} /> :
          <div>数据加载中...</div>
      }
      {
          hasMore ?
          <LoadMore onLoadMore={loadMoreHandle} /> :
          <div>没有数据了...</div>
      }
    </div>
  )
}
