'use strict';

document.querySelector('.button').onclick = () => {
  let wrap = document.createElement('p');
  wrap.classList.add('wrap');
  document.querySelector('.container').appendChild(wrap);

  let res = `<p сlass="wrap">
    <label class="label">
      ID товара
      <input class="goods" type="number" name="id" />
    </label>
    <label class="label">
      Количество товара
      <input class="sum" type="number" name="number" />
    </label>
  </p>`;

  wrap.innerHTML = res;
};

document.querySelector('.submit').onclick = () => {
  let order = [];
  document.querySelectorAll('.order').forEach(function (item, index) {
    order[index] = item.value;
  });

  let id = [];
  document.querySelectorAll('.goods').forEach(function (item, index) {
    id[index] = item.value;
  });
  let num = [];
  document.querySelectorAll('.sum').forEach(function (item, index) {
    num[index] = item.value;
  });

  if (localStorage.getItem('order')) {
    localStorage.removeItem('order');
    localStorage.setItem('order', JSON.stringify(order));
  } else {
    localStorage.setItem('order', JSON.stringify(order));
  }

  if (localStorage.getItem('id')) {
    localStorage.removeItem('id');
    localStorage.setItem('id', JSON.stringify(id));
  } else {
    localStorage.setItem('id', JSON.stringify(id));
  }

  if (localStorage.getItem('num')) {
    localStorage.removeItem('num');
    localStorage.setItem('num', JSON.stringify(num));
  } else {
    localStorage.setItem('num', JSON.stringify(num));
  }

  document.querySelector('.link').style.display = 'block';
};
