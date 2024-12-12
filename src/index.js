import "./styles.css";
import { loadSpecials } from ".//specials.js";
import { loadAppetizers } from ".//appetizers.js";
import { loadDrinks } from ".//drinks.js";

const headerBtn = document.querySelectorAll("button");
const specialBtn = document.querySelector(".specials");
const appetizersBtn = document.querySelector(".appetizers");
const drinksBtn = document.querySelector(".drinks");
const viewMenuBtn = document.querySelector(".viewMenuButton");

loadAppetizers();

viewMenuBtn.addEventListener("click", () => {
    document.querySelector(".mainContainer").scrollIntoView({ behavior: "smooth"});
});

headerBtn.forEach(button => {

    button.addEventListener("click", () => {

        headerBtn.forEach(button => {
            button.classList.remove("active");
        });
        
        button.classList.add("active");
    });
});

specialBtn.addEventListener("click", () => {
    loadSpecials();
});

appetizersBtn.addEventListener("click", () => {
    loadAppetizers();
});

drinksBtn.addEventListener("click", () => {
    loadDrinks();
});
