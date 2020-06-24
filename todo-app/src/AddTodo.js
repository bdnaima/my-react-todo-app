import React, { Component } from 'react'

class AddTodo extends Component {

    state ={
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form className="search" onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <div className="flex-button">
                        <input className="form-control m-auto" type="text" onChange={this.handleChange} value={this.state.content} />
                        <button className="btn btn-light">Enter todo</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo