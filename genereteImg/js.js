let img = document.createElement('img');
let randomIndex = Math.floor(Math.random() * 10) + 1;
img.src = `/images/img${randomIndex}.jpg`;
document.body.appendChild(img);


// let myArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
// let randomIndex = Math.floor(Math.random() * myArray.length);
// let randomElement = myArray[randomIndex];
// document.body.appendChild(randomElement);

// while (document.body.firstChild) {
//     document.body.removeChild(document.body.firstChild);
// }

// document.body.appendChild(randomElement);
