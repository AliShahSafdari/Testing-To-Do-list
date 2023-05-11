const todos = [{ id: 1, task: "Hello alishah", status: false }, { id: 2, task: "Hello Sirat", status: false }];
const edit = (item) => {
    const exactTodo = todos.find(todo => todo.id === item.id);
    exactTodo.task = item.task;
}

const update = (id) => {
    const exactTodo = todos.find(todo => todo.id === id);
    exactTodo.status = true;
    return exactTodo;
}

const clearAll = () => {
    const exactTodo = todos.filter(todo => todo.status !== true);
    exactTodo.forEach((todo, id) => {
        todo.id = id + 1;
    });
    return exactTodo;
}

exports.edit = edit;
exports.update = update;
exports.clearAll = clearAll;