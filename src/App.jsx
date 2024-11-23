import TodoList from "./components/todoList"

function App() {

  return (
    <main>
      <div className="container max-w-xl bg-slate-400 mx-auto p-4 mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Todo List
        </h1>
        <TodoList/>
      </div>
    </main>
  )
}

export default App
