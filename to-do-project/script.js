let toDoList = document.getElementById('todo-list');
const toDoInput = document.getElementById('todo-input');
const submitButton = document.getElementById('add-btn');
const jItems = document.getElementById('items');
const jCheckedItems = document.getElementById('checked-items');
let listItems = 0;
let checkedItems = 0;

const spanElement = document.createElement('span');
const checkedSpan = document.createElement('span');

const updateCount = () => {
    spanElement.textContent = `Tasks Pending: ${listItems - checkedItems}`;

    if(checkedItems > 0) {
        checkedSpan.textContent = `Completed: ${checkedItems}`;
        jCheckedItems.appendChild(checkedSpan);
    } else {
        checkedSpan.remove();
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
                if(e.target.classList.contains('checked')) {
                    e.target.classList.remove('checked');
                    checkedItems--;
                    updateCount();

                } else {
                    e.target.classList.add('checked');
                    checkedItems++;
                    updateCount();
                }
            }
            else if(e.target.tagName === 'SPAN') {
                const parentItem = e.target.parentElement;
                if(parentItem.classList.contains('checked')) {
                    checkedItems--;
                }
                parentItem.remove();
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

