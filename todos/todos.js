import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

//const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
//const deleteButton = document.querySelector('.delete-button');


async function renderTodos() {
    const derp = document.getElementById('listing');
    derp.textContent = '';
    const todos = await getTodos();
    for (let todo of todos) {
        const li = renderTodo(todo);
        li.addEventListener('click', async() => {
            await completeTodo(todo.id);
            renderTodos();
        });
        derp.append(li);
    }
    
}
renderTodos();

todoForm.addEventListener('submit', async(e) => {
    e.preventDefault;
    
    const todoData = new FormData(todoForm);
    const todo = todoData.get('todo');
 
    await createTodo(todo);
    renderTodos();
    todoForm.reset(); 
     
    

});

async function displayTodos() {
    // fetch the todos
    await getTodos();
    // display the list of todos
    await renderTodos();
    // be sure to give each todo an event listener

    // on click, complete that todo
}

// // add an on load listener that fetches and displays todos on load

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos
    await deleteAllTodos();
    renderTodos();
    
    
    // then refetch and display the updated list of todos
});
