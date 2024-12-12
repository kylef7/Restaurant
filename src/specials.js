import urlOne from './img/quichelorraine.jpg';
import urlTwo from './img/frenchtoast.jpg';
import urlThree from './img/cremebrulee.jpg';

export function loadSpecials() {
    const container = document.getElementById("content");
    container.innerHTML = "";
    
    const specialItem = document.createElement("div");
    specialItem.classList.add("specialItem");

    const specialItemTwo = document.createElement("div");
    specialItemTwo.classList.add("specialItem");

    const specialItemThree = document.createElement("div");
    specialItemThree.classList.add("specialItem");

    const specialRight = document.createElement("div");
    specialRight.classList.add("specialRight");

    const specialRightTwo = document.createElement("div");
    specialRightTwo.classList.add("specialRight");

    const specialRightThree = document.createElement("div");
    specialRightThree.classList.add("specialRight");

    const imgOne = document.createElement("img");
    const imgTwo = document.createElement("img");
    const imgThree = document.createElement("img");

    imgOne.src = urlOne;
    imgTwo.src = urlTwo;
    imgThree.src = urlThree;

    const specialOneh2 = document.createElement("h2");
    specialOneh2.textContent = "Quiche Lorraine";
    const specialTwoh2 = document.createElement("h2");
    specialTwoh2.innerHTML = "Pain Perdu <br> (French Toast)";
    const specialThreeh2 = document.createElement("h2");
    specialThreeh2.textContent = "Creme Brulee";

    const specialOneP = document.createElement("p");
    specialOneP.textContent = "Our classic pie with a custard filling of cream, eggs, and either ham or bacon, baked into a flaky crust.";
    const specialTwoP = document.createElement("p");
    specialTwoP.textContent = "Soaked in a rich egg batter, pan-fried until golden. Served with fruit, whipped cream, or a dusting of powdered sugar.";
    const specialThreeP = document.createElement("p");
    specialThreeP.textContent = "Creamy vanilla custard with a caramelized sugar crust.";

    specialRight.append(specialOneh2);
    specialRight.append(specialOneP);

    specialRightTwo.append(specialTwoh2);
    specialRightTwo.append(specialTwoP);

    specialRightThree.append(specialThreeh2);
    specialRightThree.append(specialThreeP);
    
    specialItem.append(imgOne);
    specialItem.append(specialRight);
    specialItemTwo.append(imgTwo);
    specialItemTwo.append(specialRightTwo);
    specialItemThree.append(imgThree);
    specialItemThree.append(specialRightThree);

    container.append(specialItem, specialItemTwo, specialItemThree);
}

