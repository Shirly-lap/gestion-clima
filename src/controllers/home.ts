const logoutBtn= document.querySelector("#logout-button") as HTMLButtonElement

document.addEventListener('DOMContentLoaded', () =>{
    if(!sessionStorage.getItem('token')){
        window.location.href='/'
    }
})

logoutBtn.addEventListener('click',()=>{
    sessionStorage.removeItem('token');
    window.location.href = '/'
})