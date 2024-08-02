import { Card } from "./card"
import { CitiesController } from "./cities.controller"

const url = 'http://localhost:3000/'
const logoutBtn= document.querySelector("#logout-button") as HTMLButtonElement
const carSection = document.querySelector("#cards-section");


document.addEventListener('DOMContentLoaded', () =>{
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

    cities.forEach(city => {
        carSection?.appendChild(Card(city))
    })
}
showCities()

