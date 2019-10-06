const checkInput = document.querySelector('#menu-switch');
const wrapper = document.querySelector('.wrapper');

function check() {
  if(checkInput.checked === true) {
    wrapper.classList.add('no-scroll');
  } else {
    wrapper.classList.remove('no-scroll');
  }
}

export default check();