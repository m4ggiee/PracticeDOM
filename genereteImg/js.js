const img1 = document.getElementById('1');
const img2 = document.getElementById('2');
const img3 = document.getElementById('3');
const img4 = document.getElementById('4');
const img5 = document.getElementById('5');
const img6 = document.getElementById('6');
const img7 = document.getElementById('7');
const img8 = document.getElementById('8');
const img9 = document.getElementById('9');
const img10 = document.getElementById('10');


let myArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
let randomIndex = Math.floor(Math.random() * myArray.length);
let randomElement = myArray[randomIndex];
document.body.appendChild(randomElement);

while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
}

document.body.appendChild(randomElement);
