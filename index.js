
// const paragraph = window.document.getElementsByTagName('p');
const paragraph1 = document.getElementById('paragraph-1');

// console.log(paragraph)

paragraph1.innerHTML = 'I am paragraph 1';
paragraph1.style.color = 'grey';
paragraph1.style.fontSize = '78px';
paragraph1.style.border = '10px solid red';
paragraph1.style.textAlign = 'center';

const list = document.getElementsByTagName('li');

for (let i = 0; i < list.length; i++){
    list[i].innerHTML = `Element ${i + 1}`;
    list[i].classList.add ('list-item');
}
const newElement = document.createElement('div');

newElement.innerHTML = 'how are you?';
newElement.style.background = 'blue';
newElement.style.padding = '10px';
newElement.style.color = 'white';

const container = document.getElementById('container');

container.appendChild(newElement);

const ol = document.getElementsByTagName('ol');

const listIntems = ol[0].querySelectorAll('li');

const newListItem = document.createElement('li');
newListItem.innerHTML = 'I am a new list item';
newListItem.style.color = 'purple';
// ol[0].appendChild(newListItem);
ol[0].insertBefore(newListItem, listIntems[1]);

const block = document.getElementsByTagName('block');
block[0].style.background = 'black';
block[0].style.padding = '20px';