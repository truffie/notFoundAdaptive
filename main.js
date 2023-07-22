let theme = document.querySelector('.theme');
let body = document.querySelector('.body');
let text = document.querySelectorAll('.theme-text')
let btns = document.querySelectorAll('.btn')

let black = () => {
  body.classList.add('two')
  body.classList.remove('one');
  for (let chars of text) {

    chars.classList.add('oneone');
    chars.classList.remove('twotwo');
  }
  for (let chars of btns) {

    chars.classList.add('btn-black')
  }
}

let white = () => {
  body.classList.add('one')
  body.classList.remove('two');
  for (let chars of text) {

    chars.classList.add('twotwo');
    chars.classList.remove('oneone');
  }

}

theme.onclick = function () {
  if (body.classList.contains('one')) {
    black();

  } else if (body.classList.contains('two')) {
    white();
  }
} 