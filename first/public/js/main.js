const cityName=document.getElementById('cityName')
const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');


const getInfo= async(event) =>{
    event.preventDefault();
    let cityVal=cityName.value;
    
    if(cityVal===""){
        city_name.innerText='Please write the name'

    }else{
        try{
            
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4870fffef8aedc68e8a1834f2b29f3a0`;
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        city_name.innerText=`${arrData[0].name} ${arrData[0].sys.country}`
        temp_real_val.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather[0].main;
        }catch{
            city_name.innerText='Please write the name of city properly';
            temp_real_val.innerText="";

        }
    }
}

submitBtn.addEventListener('click',getInfo)