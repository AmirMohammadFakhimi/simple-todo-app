import React from "react";
import {category} from "./App";

class List extends React.Component<{
    todoCategory: category,
    todos: readonly {
        name: string
        isDone: boolean
    }[],
    toggleTodo: (index: number) => void
}, {}> {
    private readonly toggleTodo: (index: number) => void;

    constructor(props: {
        todoCategory: category,
        todos: {
            name: string
            isDone: boolean
        }[],
        toggleTodo: (index: number) => void
    }) {
        super(props);
        this.toggleTodo = props.toggleTodo;
        this.state = {todos: []};
    }

    render() {
        return (
            <ul>
                {this.props.todos.filter((item) => {
                        if (this.props.todoCategory === 'all')
                            return true;
                        else if (this.props.todoCategory === 'done')
                            return item.isDone;
                        else
                            return !item.isDone;
                    }
                ).map((todo, index) => (
                    <li key={index}
                        onClick={() => this.toggleTodo(index)}
                        style={{
                            textDecoration: todo.isDone ? "line-through" : "none",
                            cursor: "pointer",
                        }}>
                        {todo.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;