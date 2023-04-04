const inputEl = document.querySelector('input');
const mainEl = document.querySelector('main');

export function makeBtn(stuff){
  stuff.preventDefault();

  const val = inputEl.value;
  inputEl.value = ' ';

  const button = document.createElement('button');  
  button.textContent = val;
  mainEl.append(button);
}