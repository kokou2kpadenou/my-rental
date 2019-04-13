const barContainer = document.getElementById('bar_container');
const navBar = document.getElementById('nav-bar');
const menuElt = document.getElementsByClassName('nav-link');

function sandwichToggle(e) {
  switch (e.target.nodeName.toLowerCase()) {
    case 'a':
      barContainer.classList.remove('change');
      navBar.classList.remove('open');
      break;
    case 'div':
      barContainer.classList.toggle('change');
      navBar.classList.toggle('open');
  }
  e.stopPropagation();
}

for (let i = 0; i < menuElt.length; i++) {
  menuElt[i].addEventListener('click', sandwichToggle);
}

barContainer.addEventListener('click', sandwichToggle);



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-top-id').style.display = 'block';
  } else {
    document.getElementById('back-to-top-id').style.display = 'none';
  }
}
