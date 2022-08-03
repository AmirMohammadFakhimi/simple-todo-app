import React from 'react';
import TodoInput from "./TodoInput";
import List from "./List";

export type category = 'all' | 'active' | 'done';

class App extends React.Component {
    readonly state: {
        todoCategory: category,
        todos: {
            name: string
            isDone: boolean
        }[]
    } = {todoCategory: 'all', todos: []};

    render() {
        return (
            <div className="App">
                <TodoInput callBack={(newTodo: {
                    name: string
                    isDone: boolean
                }) => {
                    this.setState({todos: [...this.state.todos, newTodo]});
                }}/>
                <List todos={this.state.todos} toggleTodo={(index: number) => {
                    this.setState({
                        todos: this.state.todos.map((todo, i) => {
                                if (i === index)
                                    return {...todo, isDone: !todo.isDone};
                                    // return {name: todo.name, isDone: !todo.isDone};
                                else
                                    return todo;

                            }
                        )
                    });
                }} todoCategory={this.state.todoCategory}/>
                <button type="button" onClick={
                    () => {
                        this.setState({todoCategory: 'all'});
                    }
                }>All
                </button>
                <button type="button" onClick={
                    () => {
                        this.setState({todoCategory: 'done'});
                    }
                }>Done
                </button>
                <button type="button" onClick={
                    () => {
                        this.setState({todoCategory: 'active'});
                    }
                }>Active
                </button>
            </div>
        );
    }
}

export default App;
