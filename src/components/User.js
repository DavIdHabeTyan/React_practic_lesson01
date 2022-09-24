import React from "react";

class User extends React.Component {
    hendelRemoveClick = (e, user) => {
        e.stopPropagation();
        this.props.removeUser(user.id)
    }

    render() {


        const {user, changeName} = this.props;


        return (
            <li onClick={() => changeName(user.id)}>
                id = {user.id} {user.name}
                <button onClick={(e) => this.hendelRemoveClick(e, user)}>X</button>
            </li>
        )
    }
}

export default User




