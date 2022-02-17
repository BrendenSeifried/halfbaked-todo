// export function renderTodo(todo) {
//     // create a div and a p tag
//     // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     // add the 'todo' css class no matter what

//     // put the todo's text into the p tag
//     p.textContent = todo;
//     div.append(p);
//     console.log('todo');
//     return div;
//     // append stuff

//     // return the div
// }


// export function renderTodo(todo) {
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     div.classList.add(todo.complete ? 'complete' : 'incomplete');
//     div.classList.add('todo');
//     p.textContent = todo.todo;
//     div.append(p);
//     return;
// }

export function renderTodo(todo) {
    const li = document.createElement('li');
    if (todo.complete) {
        li.classList.add('complete');
    }
    li.textContent = todo.description;
    return li;
}

