let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('reset')) {
      count = 0;
    }
    if (count > 0) {
      value.classList.add('green');
      value.classList.remove('red', 'white');
    } else if (count < 0) {
      value.classList.add('red');
      value.classList.remove('green', 'white');
    } else if (count === 0) {
      value.classList.add('white');
      value.classList.remove('green', 'red');
    }

    value.textContent = count;
  });
});
console.log(btns);
