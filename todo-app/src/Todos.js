import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <ul className="list-group todos mx-auto text-light">
                        <li className="list-group-item d-flex justify-contnent-between align-items-center" onClick={() => deleteTodo(todo.id)}>{todo.content}</li>
                    </ul>
                </div>
            )
        })
    ) : (
        <p className="card-text">You have no todo's left.</p>
    )
    return (
        <div>
        {todoList}
        </div>
    )
}

export default Todos