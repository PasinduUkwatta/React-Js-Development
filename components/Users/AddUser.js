import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "./ErrorModel";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredAge, setEnteredAge] = useState("")
    const [error, setError] = useState("")

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            })
            return
        }

        //add the plus sign to convert the string into number
        if (+enteredAge < 1) {

            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)"
            })
            return;
        }

        props.onAddUser(enteredUsername, enteredAge)

        //resetting data to default values
        setEnteredUsername("")
        setEnteredAge("")

    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler =()=>{
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModel
                title={error.title}
                message={error.message}
                onConfirm ={errorHandler}

            />}
            <Card classname={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />

                    <label htmlFor="age">Age(Years)</label>
                    <input
                        type="number"
                        id="age"
                        value={enteredAge}
                        onChange={ageChangeHandler}

                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>


    )
}

export default AddUser





