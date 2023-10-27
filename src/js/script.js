const nav_btn=document.querySelector("#toggle-nav")
const list_nav=document.querySelector("#list-nav")


nav_btn.addEventListener('click',()=>{
    list_nav.classList.contains("hidden") ? list_nav.classList.remove("hidden") :list_nav.classList.add("hidden")
})