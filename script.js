const pAmount = document.querySelectorAll('.amount');
const bar = document.querySelectorAll('.bar');

const url = 'data.json';

fetch(url)
      .then(res => res.json())
      .then(data => {
            for (var i = 0; i < bar.length; i++) {
                  pAmount[i].innerText = "$" + data[i].amount;
            }
      });


const date = new Date();

let day = (date.getDay() - 1);

if (date.getDay() === 0) {
      bar[6].classList.add('today');
} else {
      bar[day].classList.add('today');
}
