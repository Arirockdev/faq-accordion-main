const doc = document;

const plus = doc.getElementsByClassName('plus');

const answer = doc.querySelectorAll('.answer')

for(let i = 0; i < plus.length; i++){
  plus[i].addEventListener('click', () => {
    plus[i].classList.toggle('active')
    answer[i].classList.toggle('show');
  })
}