window.onload = function() {var btn = document.getElementById("btn");
var input = document.querySelector("input").value;
var inp = document.getElementById("inp");
var search = document.getElementById("search")
var location = document.getElementById("location");
var forecast = document.getElementById("forecast")

btn.addEventListener('click',()=>{
    fetch('http://localhost:3000/weather?address='+inp.value)
    .then((res)=>res.json())
    .then((res)=>{
         location.innerText = 'Location ' + res.address;
         forecast.innerText = res.forecast;
        // var loc = document.createElement('p');
        // loc.innerText = 'Location : ' + res.address
        // var forecast = document.createElement('p');
        // forecast.innerText = 'Weather ' + res.forecast
        // search.insertAdjacentElement("beforeend",loc)
        // search.insertAdjacentElement("beforeend",forecast)
    })


})
}
