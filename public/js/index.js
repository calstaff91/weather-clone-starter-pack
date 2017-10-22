window.onload = function(){

  var weatherMain = document.getElementById("weatherMain")
  var weatherDescription = document.getElementById("weatherDescription")
  var weatherTemperature = document.getElementById("weatherTemperature")
  var weatherHumidity = document.getElementById("weatherHumidity")
  var weatherImage = document.getElementById("weatherImage")
  var button = document.getElementById("weatherbutton");

  function popupbox2(){
    var city = document.getElementById("cityInput").value
    var xhr = new XMLHttpRequest();
    //xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q=London&appid=261759419c00d3cbcd98c544ba1e920e",true);
    xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=261759419c00d3cbcd98c544ba1e920e",true);
    xhr.onload = function(e){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          var data = JSON.parse(xhr.responseText);
          console.log(data.main.temp)
          weatherMain.innerHTML = data.weather[0].main
          weatherDescription.innerHTML = data.weather[0].description
          weatherTemperature.innerHTML = (data.main.temp-272.15).toFixed(0)+"<sup>o</sup>C"
          weatherHumidity.innerHTML = data.main.humidity+"%"
          var picturedescription = data.weather[0].main;
          var subdescription = data.weather[0].description;
          if(picturedescription.includes("Rain")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/rain.png");
          } else if(picturedescription.includes("Cloud") && subdescription.includes("clouds")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/cloudy.png");
          } else if(picturedescription.includes("Cloud")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/clouds.png");
          }else if(picturedescription.includes("Clear")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/clear.png");
          } else if(picturedescription.includes("Snow")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/snowflake.png");
          } else if(picturedescription.includes("Drizzle")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/rain.png");
          } else if(picturedescription.includes("Fog")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/smoke.png");
          } else if(picturedescription.includes("Haze")){
            document.getElementById("weatherImage").setAttribute("src", "../../assets/images/smoke.png");
          } else {
            document.getElementById("weatherImage").setAttribute("src", "");
          }
        } else{
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function(e){
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }

  button.addEventListener("click",popupbox2);
}
