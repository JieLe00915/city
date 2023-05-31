import React,{useEffect,useState}from 'react'
import SerchView from '../SerchView/index';
import api from '../../../api/index';
import LoadMore from '../../../components/LoadMore'
export default function SerchList(props) {
    // 存返回的数据
    const [searchData,setSearchData]=useState([])
    //存返回 hasMore的状态
    const [hasMore,setHasMore]=useState(false)

    useEffect(async () => { 
        // console.log(props.keyWords);
        const res=await api.getSearch({
            search:props.keyWords
        })
        if (res.status==200) {
            setSearchData(res.data.result.data)
            setHasMore(res.data.result.data)
        }
        // 在销毁之前 清除定时器 网络请求
        return () => {
            setSearchData([])
            setHasMore(false)
        }
       
    },[props.keyWords])

    const loadMoreHandle=async () =>{
        const res=await api.getSearch({
            search:props.keyWords
        })
        if (res.status==200) {
            // 让searchData 的数据 不断 加入数组  形成刷新
            setSearchData([...searchData,...res.data.result.data])
            // setSearchData(searchData.concat(res.data.result.data))
            setHasMore(res.data.result.data)
          
        }
    }

  return (
    <div>
        {
            searchData.length>0?
            <SerchView  search={searchData}/>:
            <div>等待数据传输....</div>
        }
        {
            hasMore?
            <LoadMore onLoadMore={loadMoreHandle}/>:
            <div>没有内容了</div>
        }
        
    </div>
  )
}
