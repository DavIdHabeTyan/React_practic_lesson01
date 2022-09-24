import React from "react";
import './App.css';
import User from "./components/User";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            isLoading: true,
        }
    }

    removeUser = (id) => {
        const removeId = this.state.users.filter((user) => user.id !== id)
        this.setState({
            users: removeId,
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                users: [
                    {id: 1, name: "David"},
                    {id: 2, name: "John Doe"},
                    {id: 3, name: "Jane Gatson"},
                ],
                isLoading: false
            })
        }, 1000)
    }

    changeName = (id) => {
        const change_Name = this.state.users.map(elem => {
            if (elem.id === id) {
                elem.name = "Mikel"
            }
            return elem
        })
        this.setState({
            users: change_Name
        });
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <span>Loading...</span>}
                {!this.state.isLoading && <ul>
                    {this.state.users.map((user) => {
                        return (
                            <User key={user.id} user={user} removeUser={this.removeUser} changeName={this.changeName}/>
                        )
                    })}
                </ul>}
            </div>
        )
    }

}


export default App;
