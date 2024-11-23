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
}));

export const fetchItemsTodo = createEffect(async () => {
    setLoading(true); 
    return new Promise((resolve) => {
        setTimeout(() => {
            const initialTodos = ["Купить продукты", "Прочитать книгу", "Сделать домашнее задание"];
            resolve(initialTodos);
            setLoading(false);
        }, 10000); 
    });
});

fetchItemsTodo.done.watch(({ result }) => {
    todosStore.getState((state) => ({
        ...state,
        todos: result,
    }));
});