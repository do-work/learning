// IN PROGRESS

const changeListInput = document.querySelector('input.description');
const changeListP = document.querySelector('p.description');
const changeListBtn = document.querySelector('button.description');

const addItemInput = document.querySelector('input.addItem');
const addItemBtn = document.querySelector('button.addItem');

const listDiv = document.querySelector('.itemList');
const ulList = document.querySelector('.ulList');
const delBtn = document.querySelector('.removeBtn');

const list = ulList.children;
const firstListItem = ulList.firstElementChild;
const lastListItem = ulList.lastElementChild;

function addListBtn(li) {
    let upBtn = document.createElement('button');
    upBtn.className = 'moveUpBtn';
    upBtn.textContent = 'Up';
    li.appendChild(upBtn);
    if (firstListItem){
        upBtn.classList.add("topBtn");
    }

    let downBtn = document.createElement('button');
    downBtn.className = 'moveDownBtn';
    downBtn.textContent = 'Down';
    li.appendChild(downBtn);
    if (lastListItem){
        downBtn.classList.add('bottomBtn');
    }

    let removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    removeBtn.textContent = 'Remove';
    li.appendChild(removeBtn);
}

for (let i = 0; i < list.length; i++) {
    addListBtn(list[i]);
}

function checkForChange() {
    let upBtn = firstListItem.querySelector('button.moveUpBtn');
    let downBtn = lastListItem.querySelector('button.moveDownBtn');

    for (let i = 0; i < list.length; i++) {
        if (firstListItem == list[i]){
            if (upBtn !== null){
                firstListItem.removeChild(upBtn);
            }
        } else if (lastListItem == list[i]) {
            if (downBtn !== null) {
                lastListItem.removeChild(downBtn);
            }
        } else {
            if (upBtn == null) {
                let newUpBtn = document.createElement('button');
                newUpBtn.className = 'moveUpBtn';
                newUpBtn.textContent = 'Up';
                let newDownBtn = list[i].querySelector('.moveDownBtn');
                list[i].insertBefore(newUpBtn, newDownBtn);
            }

            if (downBtn == null) {
                let newDownBtn = document.createElement('button');
                newDownBtn.className = 'moveDownBtn';
                newDownBtn.textContent = 'Down';
                let newUpBtn = list[i].querySelector('.moveUpBtn');
                list[i].insertBefore(newDownBtn, newUpBtn);
            }
        }
    }
}

checkForChange();

changeListBtn.addEventListener('click', () => {
    changeListP.innerHTML = changeListInput.value + ':';
});

addItemBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    addListBtn(li);
    ulList.appendChild(li);
    addItemInput.value = '';
});

listDiv.addEventListener('click', function(event) {
    if (event.target.tagName == 'BUTTON'){
        let li = event.target.parentNode;
        let ul = li.parentNode;

        if (event.target.className == 'removeBtn') {
            ul.removeChild(li);
            checkForChange();
        }

        if (event.target.className == 'moveUpBtn') {
            let prevLi = li.previousElementSibling;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
            checkForChange();
        }

        if (event.target.className == 'moveDownBtn') {
            let nextLi = li.nextElementSibling;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }
            checkForChange();
        }
    }
});
