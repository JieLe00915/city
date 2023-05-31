const express=require('express')
const app=express()
const router=require("./router")
const cors=require('cors')
app.use(express.json())
//获取 post请求的参数
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api',router)
app.listen(5000,() => { 
    console.log('服务器5000启动成功');
 })