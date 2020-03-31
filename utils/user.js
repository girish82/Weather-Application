const request = require("request");

const getCordinates = (place,callback) => {

    const locationurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1IjoiZ2lyaXNoODIiLCJhIjoiY2s4Zm9jOHI4MDU2ajNucGVqbmVrd2t1YiJ9.yRVUKykYb9ZtQK4MSyoG3g'

    request({url : locationurl,json:true},(error,response)=> {
        if(response.body.features.length === 0) {
            callback('Unable to find location',{})
        }else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            callback(null,{latitude : latitude,longitude:longitude})
        }
    })
}

const getWeather = (data,callback) => {

    const weatherurl = 'https://api.darksky.net/forecast/de3cd945519485b415d6699b9659a6e5/'+data.latitude+','+data.longitude+'?units=si'
    console.log(weatherurl)

    request({url : weatherurl,json:true},(error,response)=> {
        if(response.body.code === 400) {
            callback('Bad location',{})
        }else {
            callback(null,'TimeZone : '+ response.body.timezone + ' The temperature in the location is ' + response.body.currently.temperature + ' .'
                            + 'Outside weather is ' + response.body.currently.summary)
        }

    })
}


module.exports = {
    getCordinates,
    getWeather
}
