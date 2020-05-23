var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos'));


const renderTodos = () => {
    listElement.innerHTML = ''
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a')
        var linkText = document.createTextNode('X')

        var pos = todos.indexOf(todo)

        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', `deleteTodo(${pos})`)
        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement) 
    }
}

renderTodos();

const addTodo = () => {
    var todoText = inputElement.value

    inputElement.focus();
    todos.push(todoText)
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

const deleteTodo = (pos) => {
    todos.splice(pos, 1);

    renderTodos();
    saveToStorage();
}

const saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}