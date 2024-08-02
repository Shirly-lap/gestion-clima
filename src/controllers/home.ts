import { IWeather } from "../models/IWeather";
import { Card } from "./card"
import { CitiesController } from "./cities.controller"

const url = 'http://localhost:3000/'
const logoutBtn= document.querySelector("#logout-button") as HTMLButtonElement
const carSection = document.querySelector("#cards-section");


window.addEventListener('DOMContentLoaded', () =>{
    if(!sessionStorage.getItem('token')){
        window.location.href='/'
    }
})

logoutBtn.addEventListener('click',()=>{
    sessionStorage.removeItem('token');
    window.location.href = '/'
})

async function showCities() {
    const citiesController = new CitiesController(url);
    const cities = await citiesController.getCities("citys");

    cities.forEach(async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=899b0ebc77ca0bb621ca0d0cae498295`)
        const data: IWeather = await response.json()
        carSection?.appendChild(Card(city,data.main.temp))
    })
}
showCities()

