const cityName = document.getElementById("cityName");
const submitbtn = document.getElementById("submitbtn");

const outputName = document.getElementById("outputName");
const temp_text= document.getElementById("temp_text");
const temp_status= document.getElementById("temp_status");

const datahide = document.querySelector(".temp-info-bottom");




const getInfo = async(event) => {
   
event.preventDefault();

let cityVal = cityName.value;

if(cityVal===""){
    outputName.innerText = `City Name Can't be empty`;
    datahide.classList.add("data_hide");
}
else{
  try{
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5c180b9222d25536f794159edecfc565`;
    const response = await fetch(url);
    const data = await response.json();
    const arrData = [data];
   
    outputName.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
    temp_text.innerText = arrData[0].main.temp;

     const tempCondition = arrData[0].weather[0].main;

     //checking temperature condition to change the temperature status icon //

     if(tempCondition=== "Clear"){
         temp_status.innerHTML =
         "<i class='fas fa-cloud-sun' style = 'color:#EBC30D;'> </i>";
     }
     else if(tempCondition==="clouds"){
        temp_status.innerHTML =
        "<i class='fas fa-cloud' style = 'color:#fff;'></i>";
     }
     else if(tempCondition==="rain"){
        temp_status.innerHTML =
        "<i class='fas fa-umbrella' style = 'color:#0584eb;'></i>";
     }
     else {
        temp_status.innerHTML =
        "<i class='far fa-sun' style = 'color:#EBC30D;'></i>";
     }
     datahide.classList.remove("data_hide");
    
  } catch{
    outputName.innerText = `Please enter the correct city name`;
    datahide.classList.add("data_hide");
}
  }

}
submitbtn.addEventListener("click", getInfo);


    
    





       
        

        