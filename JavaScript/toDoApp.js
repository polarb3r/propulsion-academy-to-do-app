const hideList = document.getElementById('hideList');
const spaceDiv = document.querySelector('.spaceDiv');
const listDiv = document.getElementsByTagName('ul')[0];
const addItemInput = document.querySelector('input');
const addItemButton = document.querySelector('.newItemButton');
const listItems = document.getElementsByTagName('li');

hideList.addEventListener('click', () => {
  if (listDiv.style.display == 'none'){
    hideList.textContent = 'NO MORE! HIDE LIST';
    listDiv.style.display = 'block';
    spaceDiv.style.height = '0px';
  }else{
    hideList.textContent = 'i can face the list again';
    listDiv.style.display = 'none';
    spaceDiv.style.height = '16px';
  }
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

document.addEventListener('click', () => {
  if (event.target.tagName == 'LI'){
    let li = event.target;
    let ul = li.parentNode;
    ul.removeChild(li);
    if (ul.length === 0){
      spaceDiv.style.height = '16px';
    }
  }
});
//to remove: click once and it draws a line thrsough it+changes color to a lighter shade
//            click a second time and it deletes it off the list
//              ->in a next step this could need confirmation by another party
//               ->could also move it to a "to buy list" (optional - with button)
