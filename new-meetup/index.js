import NewMeetupForm from "../../components/meetups/NewMeetupForm";



function NewMeetupPage() {

    function addMeetUpHandler(enteredMeetupData) {
       console.log(enteredMeetupData)
    }
        return(
            <div>
                <NewMeetupForm onAddMeetUp={addMeetUpHandler} ></NewMeetupForm>
            </div>
        )



}

export default NewMeetupPage