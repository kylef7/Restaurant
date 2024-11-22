import heroImage from './img/dessertImage.png';

export function loadHome() {
    const container = document.getElementById("content");
    const heroImg = document.createElement('img');

    container.innerHTML = "";

    heroImg.src = heroImage;
    heroImg.classList.add("heroImage");

    container.append(heroImg);
}

