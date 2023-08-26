

// used this new method below for  sidebar toggle
const navBar = document.querySelector(".sidebar")
// const closeNavbarBtn =  document.querySelector(".close-btn")
// const OpenNavbarBtn =  document.querySelector(".nav-toggle")
let toggle = true;
const menuBtn =  document.querySelector(".nav-toggle")
const Icon = document.querySelector(".nav-toggle i")

// OpenNavbarBtn.addEventListener("click", function(){
    // navBar.style.right = "0px"
//     console.log('gelo');
// })

menuBtn.addEventListener("click", function(){
    // e.preventDefault();
    if(toggle){
        navBar.style.left = "-500px";
        Icon.setAttribute("class", "fas fa-bars"); /*means to change the class*/
        toggle = false;
    }else{
        navBar.style.left = "0px";
        Icon.setAttribute("class", "fas fa-times"); /*means to change the class*/
        toggle = true;
    }
});


// adding year to the copyright paragraph
const currentYear = document.getElementById('current-year')
const year = new Date().getFullYear();

currentYear.textContent = `© ${year} Loopstudios. All rights reserved.`
