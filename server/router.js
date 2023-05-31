const express=require('express')
// 导入路由
const router=express.Router();
const url=require('url')
// 引入home页面下的内容
const homehot =require('./data/home/homehot') 

// 引入城市内容
const city=require('./data/city')

// 引入搜索内容
const searchData=require('./data/search')

// 引入 mock.js
const Mock = require("mockjs")
const Random = Mock.Random;

// 引入详情页
const details=require('./data/details');

//  引入评价comment页面
const comment=require('./data/comment')

//  引入评价oeder 评论页面
const orderData=require('./data/order')


// 1.0  home  主页面
router.get('/home/hot1',(req,res) => { 
    const cityName=req.query.cityName
    res.send({
        status:200,
        result:homehot.hot1,
        city:cityName
    })
})
//我们在node中是没有location的，所以我们serve服务启用后，用req.url来获取到路径，然后用url.parse（req.url）.pathname  来得到我们想要的url后缀
router.get('/home/hot2',(req,res) => { 
    const cityName=url.parse(req.url,true).query.cityName
    res.send({
            status:200,
            result:homehot.hot2,
            city:cityName
        })
    
     })

//2.0  城市
router.get('/city',(req,res) => { 
    res.send({
        status:200,
        result:city.city
    })

 })

// 3.0 搜索 
//3.1 mock.js 自动搜索

router.get('/search',(req,res) => { 
    const search=url.parse(req.url,true).query.search
    let data = Mock.mock({
        hasMore: true,
        'data|5': [{
            "id|+1":Random.integer(),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            rentType: Random.cword(2),
            img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
            // img: Random.image('800x600', '#ccc', '#FFF', 'png', '重庆城,夏天凉爽')
        }]
    })
    res.send({
        status:200,
        // 写死的数据
        result:searchData
        // 自动生成
        // result:data
    })
 })

//4.0 详情页
router.get('/detail',(req,res) => { 
    const detailss=url.parse(req.url,true).query.id
    // console.log(detailss);
    res.send(details)
 })

//  5.0 用户登录req.body 获取post请求中的参数
router.post('/login',(req,res) => { 
        const{username,password}=req.body.params
        console.log(username,password);
        // console.log(req.body);
        if (password&&username) {
            res.send({
                status:200,
                token:'sadagafaf5a48eg4ad1asfagag5484',
                nick:username
            })
        }else{
            res.send({
                status:400,
                mseg:'用户名密码错误'
            })
        }
     })
// 6. 评价页面
router.get('/comment',(req,res) => { 
    const id=url.parse(req.url,true).query.id
    // console.log(id);
    res.send({
        status:200,
        result:comment
    })
    
    
     })
//7.评价页面
     router.get('/order/comment',(req,res) => { 
        const username=url.parse(req.url,true).query.username
        // console.log(username);
        res.send({
            status:200,
            result:orderData
        })
        
        
         })
    
//8.评价判断
router.post('/order/submit/comment',(req,res) => { 
    const{id,username,content}=req.body.params
    console.log(id,username,content);
    res.send({
        status:200,
        mse:'评价成功'
    })
    
    
     })




module.exports=router