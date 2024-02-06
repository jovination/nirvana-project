const arrAn = document.querySelector('.arr-an');

arrAn.addEventListener('transitionend', () => {
  // Once the animation ends, hide the arrow icon
  arrAn.style.display = 'none';
});
