import "./styles.css";
import { loadHome } from ".//home.js";

const headerBtn = document.querySelectorAll("button");
const homeBtn = document.querySelector(".home");

headerBtn.forEach(button => {

    button.addEventListener("click", () => {

        headerBtn.forEach(button => {
            button.classList.remove("active");
        });
        
        button.classList.add("active");
    });
});

homeBtn.addEventListener("click", () => {
    loadHome();
});

