let todos = [];
let idCounter = 1;

export const TodoModel = {
  getAll() {
    return todos;
  },
  getById(id) {
    return todos.find((todo) => todo.id === id);
  },
  create(title) {
    const newTodo = {
      id: idCounter++,
      title,
      completed: false,
    };
    todos.push(newTodo);
    return newTodo;
  },
  update(id, data) {
    const todo = this.getById(id);
    if (!todo) return null;

    Object.assign(todo, data);
    return todo;
  },
  delete(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return false;

    todos.splice(index,1);
    return true;
  },
};
