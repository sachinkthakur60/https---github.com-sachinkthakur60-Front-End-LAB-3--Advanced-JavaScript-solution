import { WeatherAPI } from "./weather-api.js";

function testURLBuilder(){
    const weatherAPI = new WeatherAPI();
    weatherAPI.buildURL("Bangalore");
}

function testAPI1(){
    const weatherAPI = new WeatherAPI();
    // let responseJSON = 
    weatherAPI.invoke("Bangalore")
    .then( (responseJSON) => {
        console.log(responseJSON);
    })
}


// testURLBuilder();
testAPI1();