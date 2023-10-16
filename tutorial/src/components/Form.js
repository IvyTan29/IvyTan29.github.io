import { Component } from 'react';

class Form extends Component {
    state = {
        firstname: 'firstname',
        lastname: 'lastname',
    };

    handleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        });
    };

    handleLastNameChange = (event) => {
        //use this syntax (arrow notation) to have access to the event here
        this.setState({
            lastname: event.target.value,
        });
    };

    render() {
        return (
            <div>
                Form
                <form>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.firstname}
                    ></input>
                    <input
                        onChange={this.handleLastNameChange}
                        type="text"
                        value={this.state.lastname}
                    ></input>
                </form>
            </div>
        );
    }
}

export default Form;
