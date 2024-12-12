import urlOne from './img/martini.jpg';

export function loadDrinks() {
    const container = document.getElementById("content");
    container.innerHTML = "";

    const drinkItem = document.createElement("div");
    drinkItem.classList.add("specialItem");

    const drinkRight = document.createElement("div");
    drinkRight.classList.add("specialRight");

    const drinkP = document.createElement("p");
    drinkP.textContent = "A sweet and fruity cocktail made with vodka, raspberry liqueur, and pineapple juice.";

    const drinkh2 = document.createElement("h2");
    drinkh2.textContent = "French Martini";

    const imgOne = document.createElement("img");
    imgOne.src = urlOne;

    drinkRight.append(drinkh2);
    drinkRight.append(drinkP);
    drinkItem.append(imgOne);
    drinkItem.append(drinkRight);

    container.append(drinkItem);
}
