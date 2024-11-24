import { addTodo, removeTodo, fetchItemsTodo, todosStore } from "../store/itemsStore";
import { useUnit } from "effector-react";
import { useState, useEffect } from "react";

const TodoList = () => {
    const { todos, loading } = useUnit(todosStore); 
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    useEffect(() => {
        fetchItemsTodo(); 
    }, []);

    if (loading) {
        return <p>Загрузка задач...</p>;
    }

    return (
        <div>
            <div className="flex justify-between">
                <input className="p-4 flex-1"
                    type="text"
                    placeholder="Введите задачу"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="border border p-4 hover:bg-sky-700"
                    onClick={handleAddTodo}
                >Добавить</button>
            </div>
            <ol className="mt-8">
                {
                    todos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center border border pl-2 ">
                            {todo} 
                            <button onClick={() => removeTodo(index)} className="hover:bg-sky-700 p-5">
                                удалить
                            </button>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default TodoList;