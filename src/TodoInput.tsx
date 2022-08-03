import React, {ChangeEvent} from "react";

class TodoInput extends React.Component<{
    callBack: (currentString: {
        name: string
        isDone: boolean
    }) => void
}, { value: string }> {
    private readonly callBack: (currentString: {
        name: string
        isDone: boolean
    }) => void;

    constructor(props: {
        callBack: (currentString: {
            name: string
            isDone: boolean
        }) => void
    }) {
        super(props);
        this.callBack = props.callBack;
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: { preventDefault: () => void; }) {
        if (this.state.value !== '') {
            this.callBack({name: this.state.value, isDone: false});
            this.setState({value: ''});
        }

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Todo:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default TodoInput;