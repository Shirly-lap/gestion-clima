import Swal from "sweetalert2";
import { PageController } from "./controllers/Page.controller";

const url = 'https://reqres.in/api/'
const loginForm = document.querySelector("#loginForm") as HTMLFormElement
const emailUser = document.querySelector("#email") as HTMLInputElement
const passwordUser = document.querySelector("#password") as HTMLInputElement

loginForm.addEventListener("submit", async (event: Event) => {
    event?.preventDefault()
    const user = {
        email: emailUser.value,
        password: passwordUser.value
    };
    try {
        const pageController = new PageController(url);
        const responseOfLogin = await pageController.login(user, 'login')
        console.log(responseOfLogin.token);
        sessionStorage.setItem('token', responseOfLogin.token)

        const getToken = sessionStorage.getItem('token');
        if (getToken) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = '../src/views/home.html'
        
        }

    } catch (e) {
        console.log(e);

    }

})