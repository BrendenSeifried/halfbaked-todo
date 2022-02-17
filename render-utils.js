

export function renderTodo(todo) {
    const li = document.createElement('li');
    if (todo.complete) {
        li.classList.add('complete');
    }
    li.textContent = todo.description;
    return li;
}

