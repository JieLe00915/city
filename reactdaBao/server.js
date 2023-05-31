const express=require('express');
const app=express()

app.use(express.static(__dirname+'/static'))

app.listen(5000,(err)=>{

    if (!err) {
        console.log("5000端口号已经启动");
    }
 
})
