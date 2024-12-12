import urlOne from './img/caviareggs.jpg';

export function loadAppetizers() {
    const container = document.getElementById("content");
    container.innerHTML = "";

    const appetizerItem = document.createElement("div");
    appetizerItem.classList.add("specialItem");

    const appetizerRight = document.createElement("div");
    appetizerRight.classList.add("specialRight");

    const appetizerP = document.createElement("p");
    appetizerP.textContent = "The creamy, tangy filling made from egg yolks, mayonnaise, and mustard is perfectly balanced with a touch of richness.";

    const appetizerh2 = document.createElement("h2");
    appetizerh2.innerHTML = "Caviar-Topped <br> Deviled Eggs";

    const imgOne = document.createElement("img");
    imgOne.src = urlOne;

    appetizerRight.append(appetizerh2);
    appetizerRight.append(appetizerP);
    appetizerItem.append(imgOne);
    appetizerItem.append(appetizerRight);

    container.append(appetizerItem);
}


