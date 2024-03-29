import storage from './util/storage.js';

const init = {
  todos: storage.get(),
  filter: 'all',
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
};

const actions = {
  add({ todos }, title) {
    todos.push({ title, completed: false });
    storage.set(todos);
  },
  toggle({ todos }, index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    storage.set(newTodos);
  },
  toggleAll({ todos }, [completed]) {
    todos.forEach((todo) => (todo.completed = completed));
    storage.set(todos);
  },
  destroy({ todos }, [index]) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  switchFilter(state, [selected]) {
    state.filter = selected;
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },
  editTodo(state, [index]) {
    state.editIndex = index;
  },
  saveTodo(state, [title]) {
    if (state.editIndex !== null) {
      if (title) {
        state.todos[state.editIndex].title = title;
        storage.set(state.todos);
      } else {
        this.destroy(state, [state.editIndex]);
      }
      state.editIndex = null;
    }
  },
  cacelEdit(state) {
    state.editIndex = null;
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, args);
  return state;
}
