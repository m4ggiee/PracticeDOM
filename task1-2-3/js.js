//1----------------------------------------------------------------------------------
let input = document.querySelector('input');
let infoDiv = document.querySelector('div');

input.addEventListener('focus', function() {
    infoDiv.style.display = 'block';
});

input.addEventListener('blur', function() {
    infoDiv.style.display = 'none';
});

//2----------------------------------------------------------------------------------
let link = '';
document.getElementById('btn1').addEventListener('click', function(){
   link = prompt('Enter the link:');
   if (!link.startsWith("http://") && !link.startsWith("https://")) {
    link = "http://" + link;
  }
});

document.getElementById('btn2').addEventListener("click", () => {
    if (link) {
      window.location.href = link;
    } else {
      alert("Будь ласка, спочатку введіть посилання, натиснувши на першу кнопку.");
    }
});


//3----------------------------------------------------------------------------------
const table = document.createElement("table");
let count = 1;

for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("td");
    cell.textContent = count;
    row.appendChild(cell);
    count++;
  }
  table.appendChild(row);
}

document.body.appendChild(table);



