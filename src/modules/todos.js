import { createAction, handleActions } from 'redux-actions';

const INSERT_TODOLIST = 'todos/INSERT_TODOLIST';
const REMOVE_TODOLIST = 'todos/REMOVE_TODOLIST';
const ON_TOGGLE = 'todos/ON_TOGGLE';

const d = new Date();
export const insertTodoList = createAction(INSERT_TODOLIST, ({ text }) => ({
  todo: {
    id: d.getTime(),
    text,
    checked: false,
  },
}));

export const removeTodoList = createAction(REMOVE_TODOLIST, ({ id }) => id);
export const onToggle = createAction(ON_TOGGLE, ({ id }) => id);

const initialState = {
  input: '',
  todos: [],
};

const todos = handleActions(
  {
    [INSERT_TODOLIST]: (state, { payload: { todo } }) => ({
      ...state,
      todos: state.todos.conscat(todo),
    }),
    [REMOVE_TODOLIST]: (state, { payload: { id } }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [ON_TOGGLE]: (state, { payload: { id } }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    }),
  },
  initialState,
);

export default todos;
