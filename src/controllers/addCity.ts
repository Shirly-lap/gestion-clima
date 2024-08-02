import { CitiesController } from "./cities.controller";

const url = 'http://localhost:3000/';

const form = document.querySelector("form") as HTMLFormElement;
const city = document.querySelector("#new-city") as HTMLInputElement;
const country = document.querySelector("#new-country") as HTMLInputElement;
const image = document.querySelector("#new-img") as HTMLInputElement;
const temperature = document.querySelector("#temperature") as HTMLInputElement;
const cityDescription = document.querySelector("#newCity-description") as HTMLTextAreaElement;


form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const newCity = {
        city: city.value,
        country: country.value,
        image: image.value,
        date: new Date(),
        cityDescription: cityDescription.value,
        temperature:temperature.value,
    };

    try {
        const citiesController = new CitiesController(url)
        const response = await citiesController.createCity(newCity,'citys')
        
        if(response){   
            alert("Agregado con exito")
            window.location.href = '/src/views/home.html'
        }
        
    } catch (error) {
        console.log(error);
        
    }

})