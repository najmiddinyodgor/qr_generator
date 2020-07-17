'use strict';

let id = JSON.parse(localStorage.getItem('id'));
let num = JSON.parse(localStorage.getItem('num'));
let order = JSON.parse(localStorage.getItem('order'));

let sum = 0;
let discount = 0;
let finishSum = 0;
let index = 0;

document.querySelectorAll('.order').forEach((item, index) => {
  item.innerHTML = order[index];
});

for (let i = 0; i < id.length; i++) {
  let elem = parseInt(id[i]);

  if (data[elem]) {
    let out = `
    <td>${index}</td>
    <td>${data[elem].name}</td>
    <td>${data[elem].name}</td>
    <td>${num[i]}</td>
    <td>${data[elem].cost}</td>
    <td>${data[elem].tax}</td>
    <td>${data[elem].discount} %</td>`;

    sum += data[elem].cost;
    discount += (data[elem].cost * data[elem].tax) / 100;
    finishSum = sum - discount;

    let row = document.createElement('tr');
    row.innerHTML = out;
    document.querySelector('#table').appendChild(row);
    index++;
  }
}

document.querySelector('#sum').innerHTML = sum;
document.querySelector('#discount').innerHTML = discount;
document.querySelector('#finishSum').innerHTML = finishSum;

let canvas = document.getElementById('canvas');
let text = order[order.length - 1];

console.log(text);
QRCode.toCanvas(canvas, text, function (error) {
  if (error) console.error(error);
  console.log('success!');
});

localStorage.clear();
