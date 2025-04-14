function weatherData(city){
      
      const apiKey = 'b945d1444b0caca962c14915b1280f9c';
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => console.error(error.message))
}


const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city = document.getElementById('city').value;
    weatherData(city)

})

function displayWeather(info){
    const weatherInfo=document.querySelector('.information');
    const tempValue = info.main.temp;
    const description = info.weather[0].description;
    const city = info.name;
    const humidity = info.main.humidity;
    const windSpeed = info.wind.speed;

    weatherInfo.innerHTML=`
          <h2 class="fs-1">Weather in ${city}</h2>
          <p class="mt-3 fs-5"><strong>Temperature:</strong> ${tempValue}&#8451;</p>
          <p class="mt-3 fs-5"><strong>Weather:</strong> ${description}</p>
          <p class="mt-3 fs-5"><strong>Humidity:</strong> ${humidity}%</p>
          <p class="mt-3 fs-5"><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
          
    `
}

weatherData("navsari")