import { createStore, createEvent, createEffect } from "effector";

export const addTodo = createEvent();
export const removeTodo = createEvent();
export const setLoading = createEvent();

export const todosStore = createStore({
    todos: [],
    loading: false,
})
.on(addTodo, (state, todo) => ({
    ...state,
    todos: [...state.todos, todo],
}))
.on(removeTodo, (state, index) => ({
    ...state,
    todos: state.todos.filter((_, i) => i !== index),
}))
.on(setLoading, (state, loading) => ({
    ...state,
    loading,
}));

export const fetchItemsTodo = createEffect(async () => {
    setLoading(true); 
    return new Promise((resolve) => {
        setTimeout(() => {
            const initialTodos = [];
            resolve(initialTodos);
        }, 10000); 
    });
});

fetchItemsTodo.done.watch(({ result }) => {
    setLoading(false);
    todosStore.getState((state) => ({
        ...state,
        todos: result,
    }));
});