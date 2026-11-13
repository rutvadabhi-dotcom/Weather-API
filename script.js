const cityName = document.getElementById("city");
const submitName = document.getElementById("submit");
const cityLoc = document.getElementById("cityLocation");
const cityTemp = document.getElementById("cityTemp");
const cityTime = document.getElementById("cityTime");
const cityHum = document.getElementById("cityHum");
const cityWind = document.getElementById("cityWind");

async function getData(cityValue){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=db7984f15f624ec2b98134513261311&q=${cityValue}&aqi=yes`)
    return await promise.json()
}

submitName.addEventListener('click',async ()=> {
    const cityValue=cityName.value;
    const result = await getData(cityValue);
    cityLoc.innerText=`Location: ${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTemp.innerText= `Temperature(Celsius): ${result.current.temp_c} `;
    cityTime.innerText= `Date and Time: ${result.location.localtime}`;
    cityHum.innerText= `Humidity: ${result.current.humidity}`;
    cityWind.innerText= `Wind speed(km/h): ${result.current.wind_kph}`;

    console.log(result)

})
