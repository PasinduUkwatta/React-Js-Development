import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css"

const UsersList = props =>{
    return(

        <Card classname ={classes.users}>
            <div>
                <ul>
                    {props.users.map((user) =>
                        <li key={user.id}>{user.name} ({user.age} years old.)</li>
                    )}
                </ul>
            </div>
        </Card>

    )
}

export default UsersList