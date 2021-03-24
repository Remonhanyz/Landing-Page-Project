/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll("section");
let ulElement = document.querySelector("ul");
let timer = null;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// funtion to check that the timer is empty
// then it sets a timer for 1.5 seconds after which hideNavbar funtion will start 
function timerf() {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(hideNavbar, 1500);
}
// funtion to hide navbar with animation using classes
function hideNavbar() {
    document.querySelector("header").classList.add("not_active");
    document.querySelector("header").classList.remove("active");
}
// funtion to show navbar with animation using classes
function showNavbar() {
    document.querySelector("header").classList.add("active");
    document.querySelector("header").classList.remove("not_active");

}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavbar() {
    for (let i = 0; i < sections.length; i++) {
        //create <a> element inside <li> element, 
        // and getting the link text from data-nav attribute of each section
        ulElement.innerHTML+=`
        <li>
            <a class="menu__link">
                ${sections[i].getAttribute("data-nav")}
            </a>
        </li>
        `;
    }
}


// Add class 'active' to section when near top of viewport

function activeSec() {
    for(let i=0; i < sections.length; i++)
        // checking if the top of section is in view 
        // and that happens when section's top above half of the height of user portview
        // and section's bottom below half of the height of user portview
        if (sections[i].getBoundingClientRect().top <= window.innerHeight*0.5 && sections[i].getBoundingClientRect().bottom > window.innerHeight*0.5){
            // make the section itself appear active
            sections[i].classList.add("your-active-class");
            // make the section link in the navbar appear active
            ulElement.querySelectorAll("li")[i].querySelector("a").classList.add("your-active-class");
            ulElement.querySelectorAll("li")[i].querySelector("a").classList.remove("menu__link");
        }else if (sections[i].classList.value="your-active-class"){
            sections[i].classList.remove("your-active-class");
            ulElement.querySelectorAll("li")[i].querySelector("a").classList.remove("your-active-class");
            ulElement.querySelectorAll("li")[i].querySelector("a").classList.add("menu__link");
        };
}



// Scroll to anchor ID using scrollTO event
function scrolling(evt) {
    for (let i=0; i < sections.length; i++){
        //finding which section is the one whose data-nav has the same as neme the text of the link 
        if (evt.target.innerText == sections[i].getAttribute("data-nav")){
            window.scrollTo({
                //scrollig to the top of the section with smooth animation
                top: window.pageYOffset + sections[i].getBoundingClientRect().top,
                behavior: 'smooth',
            });
        }
    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded',createNavbar);

// Scroll to section on link click
ulElement.addEventListener("click", scrolling);

// Set sections as active
// listening for scrolling every 0.2 seconds and then excuting some funtions
// activeSec(): check which section is the one in the viewport
// showNavbar(): shows the navbar when scrolling
// timerf(): sets a timer to hide the navbar after 1.5 sec
window.setTimeout(window.addEventListener("scroll", () => {activeSec();showNavbar();timerf()}),200);



