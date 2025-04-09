import './style.css';
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import  loadAbout from "./pages/about.js";

function page(pages){

    if (pages === "home") loadHome();
    else if (pages === "menu") loadMenu();
    else if (pages === "about") loadAbout();
    
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const aboutBtn = document.querySelector("#aboutBtn");


    if (homeBtn){
        homeBtn.addEventListener("click", ()=> {
            page("home");
        });
    }
    
    
    if (menuBtn){
        menuBtn.addEventListener("click", ()=> {
            page("menu");
        });
    }


    if (aboutBtn){
        aboutBtn.addEventListener("click", ()=> {
            page("about");
        });
    }

};

page("home");