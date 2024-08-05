const main = document.querySelector(".home-main") as HTMLElement;
const idCity = localStorage.getItem("id-view") 

async function getInformation() {
    const response = await fetch(`http://localhost:3000/citys/${idCity}`)
    const data = await response.json()

    console.log(data);
    
}

getInformation()