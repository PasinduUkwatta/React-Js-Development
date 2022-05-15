import {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (

        <MeetupDetail image ="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2V8ZW58MHx8MHx8&w=1000&q=80"
        title ="First Meetup"
        address ="123,flower street,LA"
        description="This is the first meetup"/>
    )
}

export default MeetupDetails