const express = require('express');
const app = express();
const hbs = require('hbs')
const path = require('path')
const weather = require('./utils/user')

const publicPath = path.join(__dirname,'/public')
const viewsPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname,'/templates/partials')

// console.log(publicPath)
// console.log(viewsPath)
// console.log(partialsPath)

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Show the temperature and weather condition of the search place'
    })
})

app.get('/index',(req,res)=>{
    res.render('index',{
        title:'Show the temperature and weather condition of the search place'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'This application is developed by Mr.Girish Poyyara Prakash'
    })
})

app.get('/weather',(req,res)=>{
    const param = req.query.address;
    weather.getCordinates(param,(error,response)=>{
    if(error){
        return res.send({
            error : 'You must provide a valid location'
        })
    }else{
        // console.log(response)
        weather.getWeather(response,(error,response)=>{
            if(error){
                return res.send({
                    error : 'You must provide a valid location'
                })
            }else{
                return res.send({
                    address : req.query.address,
                    forecast : response
                })
            }   
        });
    }   
    });

})

app.listen(3000)