const checkInput = $('#menu-switch');
const wrapper = $('.wrapper');

function check() {
  $(checkInput).on('click', function(){
    if(checkInput.checked = true) {
      wrapper.toggleClass('no-scroll');
    } 
  })
}

export default check();