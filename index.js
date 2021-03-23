console.log('To Do List - Homework');

const container = document.getElementById('container')

document.addEventListener('load', getData); 

function getData() {
    fetch('https://simple-json-server-scit.herokuapp.com/todo/rilea')
        .then((r) => r.json())
}


const plus = document.getElementById("plus");

  plus.addEventListener("click", function () {

    const inputValue = document.getElementById("todo-input").value;
    console.log(inputValue);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-div')

    const task = document.createElement('p');
    task.classList.add('task-content')

    const checkedButton = document.createElement('input');
    checkedButton.type = 'checkbox';

    const deleteButton = document.createElement('img');
    deleteButton.src = 'delete.png';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        taskContainer.remove();

        fetch('https://simple-json-server-scit.herokuapp.com/todo/rilea', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(payload)
        }).then(getData);
    })
    
    container.appendChild(taskContainer);
    
    taskContainer.appendChild(checkedButton);
    taskContainer.appendChild(task);
    taskContainer.appendChild(deleteButton);

    task.innerText = inputValue
    
    if (inputValue) {
        const payload = {
            id: 'rilea',
            todo:[
            {
                checked: false,
                item: inputValue
            }
        ]
        }
        fetch('https://simple-json-server-scit.herokuapp.com/todo', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
        }).then(getData);
    }
})

