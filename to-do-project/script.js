let toDoList = document.getElementById('todo-list');
const toDoInput = document.getElementById('todo-input');
const submitButton = document.getElementById('add-btn');
const jItems = document.getElementById('items');
let listItems = 0;

const spanElement = document.createElement('span');

const updateCount = () => {
    if(listItems === 1) {
        spanElement.textContent = 'You have 1 task pending';
    }else {
        spanElement.textContent = `You have ${listItems} tasks pending`;
    }
};

if(jItems) {
    jItems.appendChild(spanElement);
}
updateCount();

submitButton.addEventListener('click', () => {
    const input = toDoInput.value
    //gets the "value" or input from the user, assigns it to variable input

    if(input !== "") {
        const newItem = document.createElement('li');
        //creates empty list item <li></li>
        const dltButton = document.createElement('span');
        dltButton.textContent = '\u00d7';
        newItem.textContent = input;
        //takes the value of input and puts it inside li
        //assignment order matters here, otherwise it wouldn't work
        toDoList.appendChild(newItem);
        //takes li and puts it in the ul through the global variable 
        newItem.appendChild(dltButton);
        toDoInput.value = '';
        //clears what's inside the input box

        newItem.addEventListener('click', (e)=> {
            if(e.target.tagName === 'LI') {
                //e here stands for event, this is crucial to get event.target
                //when you click the <li> that feeds "LI" to this conditional
                e.target.classList.toggle('checked');
                //toggle will add the class if clicked once and then remove the class if clicked twice
                //this will adequately look "checked" and "unchecked"
            }
            else if(e.target.tagName === 'SPAN') {
                e.target.parentElement.remove();
                listItems--;
                updateCount();
            }
        }, false);
        listItems++;
        updateCount();
    }else {
        alert("Please don't leave the input area blank");
    }
});

