const weather = require('../utils/user')

weather.getCordinates('kuwait',(error,response)=>{
    if(error){
        console.log(error)
    }else{
        // console.log(response)
        weather.getWeather(response,(error,response)=>{
            if(error){
                console.log(error)
            }else{
                console.log(response)
            }   
        });
    }   
});