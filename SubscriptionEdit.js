import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import { paymentCreditCard, paymentPaypal} from "../../layouts/UserFunctions";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import moment from "moment";





const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);




export default function SubscriptionEdit() {
    const classes = useStyles();
    const [selectedIndex] = React.useState(1);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const [modelType]=useState("")
    useEffect(()=>{},[modelType])

    const [durationType]=useState("")
    useEffect(()=>{},[durationType])

    const [startDate]=useState("")
    useEffect(()=>{},[startDate])

    const [endDate]=useState("")
    useEffect(()=>{},[endDate])



    const [subscriptionName]=useState("")
    useEffect(()=>{},[subscriptionName])

    const [modelPrice,setModelprice]=useState("")
    useEffect(()=>{},[modelPrice])




    const [selectedModelPrice]=useState("")
    useEffect(()=>{},[selectedModelPrice])


    const [calculatedPrice]=useState("")
    useEffect(()=>{},[calculatedPrice])



    const [selectedEndDate]=useState("")
    useEffect(()=>{},[selectedEndDate])

    const [selectedModelId]=useState("")
    useEffect(()=>{},[selectedModelId])

    const [currentUserId,setCurrentUserId]=useState("")
    useEffect(()=>{},[currentUserId])


    const [generatedModelName,setGeneratedModelName]=useState("")
    useEffect(()=>{},[generatedModelName])

    const [massageState,setMassageState]=useState(false)
    useEffect(()=>{},[massageState])


    const [paymentType]=useState("")
    useEffect(()=>{},[paymentType])

    const [paymentAmount]=useState("")
    useEffect(()=>{},[paymentAmount])

    const [paymentEmail]=useState("")
    useEffect(()=>{},[paymentEmail])

    const [paymentOwnerName]=useState("")
    useEffect(()=>{},[paymentOwnerName])

    const [paypalUserName]=useState("")
    useEffect(()=>{},[paypalUserName])

    const [paypalUrl]=useState("")
    useEffect(()=>{},[paypalUrl])

    const [selectedModelType,setSelectedModelType]=useState("")
    useEffect(()=>{},[selectedModelType])

    const [selectedRadio,setSelectedRadio]=useState("")
    useEffect(()=>{},[selectedRadio])

    const [selectedModelDuration,setSelectedModelDuration]=useState("")
    useEffect(()=>{},[selectedModelDuration])

    const [paypalPassword]=useState("")
    useEffect(()=>{},[paypalPassword])

    const [recurrent]=useState("")
    useEffect(()=>{},[recurrent])

    const [creditCardNo]=useState("")
    useEffect(()=>{},[creditCardNo])

    const [creditCardName]=useState("")
    useEffect(()=>{},[creditCardName])

    const [cvc]=useState("")
    useEffect(()=>{},[cvc])

    const [cardExpireDate]=useState("")
    useEffect(()=>{},[cardExpireDate])

    const [responce,setResponce] =useState("")
    useEffect(()=>{},[responce])

    const [userEmail,setUserEmail] =useState("")
    useEffect(()=>{},[userEmail])

    const [userDetails,setUserDetails] =useState([])
    useEffect(()=>{},[userDetails])

    const [userSubAmount,setUserSubAmount] =useState([])
    useEffect(()=>{},[userSubAmount])

    const [userSubStartDate,setUserSubStartDate] =useState([])
    useEffect(()=>{},[userSubStartDate])

    const [userSubEndDate,setUserSubEndDate] =useState([])
    useEffect(()=>{},[userSubEndDate])

    const [userSubType,setUserSubType] =useState([])
    useEffect(()=>{},[setUserSubType])

    const [userSubId,setUserSubId] =useState([])
    useEffect(()=>{},[setUserSubId])

    const [userDeleteId] =useState("")
    useEffect(()=>{},[userDeleteId])

    const [userEditId] =useState("")
    useEffect(()=>{},[userEditId])

    const [notification,setNotification] =useState()
    useEffect(()=>{},[notification])

    const [userRecurrent,setUserRecurrent] =useState("")
    useEffect(()=>{},[userRecurrent])

    const [userBusinessId,setUserBusinessId] =useState("")
    useEffect(()=>{},[userBusinessId])



    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };


    const handleClose1 =value=> () => {
        setAnchorEl1(null);
        window.model =value
        console.log(selectedModelType)
        setSelectedModelType(window.model)
        console.log(value)


    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };



    const handleClose2 =value=> () => {
        setAnchorEl2(null);
        window.duration =value
        console.log(selectedModelDuration)
        setSelectedModelDuration(window.duration)

    };

    const handleRadioButton =value=> () => {
        setAnchorEl2(null);

        setSelectedRadio(value)
    };




    useEffect(()=>{


        let auth = localStorage.getItem('accessTokenLogin');
        let userPayId=window.localStorage.getItem("userEditId")


        axios.post('/protected',null,{
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${auth}`,

            }
        })
            .then(responce=>{
                console.log(responce)
                console.log(responce.data.user_email)
                setUserEmail(responce.data.user_email)

                axios.post('/get-user-subscription-details',{
                        user_id:userPayId
                    }

                )
                    .then(responce=>{
                        console.log(responce)
                        // console.log(responce.data.result[0][1])
                        setUserDetails(responce.data.result[0][1])
                        setUserSubId(responce.data.result[0][0])
                        setUserSubAmount(responce.data.result[0][5])
                        setUserSubStartDate(responce.data.result[0][3])
                        setUserSubEndDate(responce.data.result[0][4])
                        setUserSubType(responce.data.result[0][2])
                        setUserRecurrent(responce.data.result[0][6])

                        axios.post("/database-model")
                            .then(responce=> {
                                console.log(responce)
                                // console.log(responce.data.result)
                                // console.log(typeof (responce.data.result))
                                setModelprice(responce.data.result)
                                // console.log(modelPrice)




                            })


                    })

            })


    },[])



    const endDateCalculator=()=>{
        if(window.duration==="week"){
            let numWeeks =1 ;
            console.log(selectedDate)

            let now = new Date(selectedDate);
            now.setDate(now.getDate() + numWeeks * 7);
            // console.log(now);
            let sevenDays=( moment(now).format('YYYY-MM-DD hh:mm:ss'))
            window.endDate=(sevenDays)
        }

        if(window.duration==="month"){
            var dt = new Date(selectedDate);
            console.log(selectedDate)

            dt.setMonth( dt.getMonth() + 1 );
            // console.log( dt );
            let oneMonth= ( moment(dt).format('YYYY-MM-DD hh:mm:ss'))
            window.endDate=(oneMonth)
        }

        if(window.duration==="annual"){
            var dtx = new Date(selectedDate);
            console.log(selectedDate)

            dtx.setMonth( dtx.getMonth() + 12 );
            // console.log( dtx );
            let oneYear=( moment(dtx).format('YYYY-MM-DD hh:mm:ss'))
            window.endDate=(oneYear)
        }

    }


    const amountCalculator=()=>{
        // console.log(modelPrice)
        // console.log(window.model)
        // console.log(window.duration)

        if((window.model==="basic")&&((window.duration==="week"))){
            window.modelPrice=((modelPrice[0][4]))
            window.modelId=((modelPrice[0][0]))
        }
        if((window.model==="basic")&&((window.duration==="month"))){
            window.modelPrice=(modelPrice[0][5])
            window.modelId=((modelPrice[0][0]))

        }
        if((window.model==="basic")&&((window.duration==="annual"))){
            window.modelPrice=(modelPrice[0][6])
            window.modelId=(modelPrice[0][0])

        }
        if((window.model==="intermediate")&&((window.duration==="week"))){
            window.modelPrice=(modelPrice[1][4])
            window.modelId=((modelPrice[1][0]))

        }
        if((window.model==="intermediate")&&((window.duration==="month"))){
            window.modelPrice=(modelPrice[1][5])
            window.modelId=((modelPrice[1][0]))

        }
        if((window.model==="intermediate")&&((window.duration==="annual"))){
            window.modelPrice=(modelPrice[1][6])
            window.modelId=((modelPrice[1][0]))

        }
        if((window.model==="advanced")&&((window.duration==="week"))){
            window.modelPrice=(modelPrice[2][4])
            window.modelId=((modelPrice[2][0]))


        }
        if((window.model==="advanced")&&((window.duration==="month"))){
            window.modelPrice=(modelPrice[2][5])
            window.modelId=((modelPrice[2][0]))

        }
        if((window.model==="advanced")&&((window.duration==="annual"))){
            window.modelPrice=(modelPrice[2][6])
            window.modelId=((modelPrice[2][0]))

        }

    }




    const submitBack = () => {
        window.location="/admin/subscription"
    };


    const submitHandler=(e)=> {
        e.preventDefault()
        console.log("Pay Button Cliked")
        console.log(  window.model)
        console.log(  window.duration)
        console.log(  selectedRadio)
        console.log(selectedDate)
        endDateCalculator()
        amountCalculator()
        console.log(window.modelPrice)
        console.log(window.endDate)
        console.log(userSubId)
        let typeName = `${selectedModelType}/${selectedModelDuration}`
        console.log(typeName)

        if(!((window.model===undefined)||(window.duration===undefined)||(selectedRadio==="")||(selectedDate===undefined))){
            setNotification(true)
            axios.post("/subscription-update-details",{
                subscriptionId:userSubId,
                subscriptionType:typeName,
                startDate:selectedDate,
                endDate:window.endDate,
                cost:window.modelPrice,
                recurrent:selectedRadio

            })
                .then(responce=>{
                    console.log(responce)
                    setTimeout(function(){
                            window.location.replace("/admin/subscription");
                        }, 1000);

                    localStorage.removeItem("userEditId");



                })
        }else {
            setNotification(false)
            console.log("fill all the details")
            setTimeout(function(){
                window.location.replace("/subscription-edit");
            }, 1200);
        }


    }



    const renderUserDetails =()=>{
        return(
            <div className="container filled">
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    User Email :{userEmail}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Subscription ID :{userSubId}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Subscription Name :{userDetails}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Subscription Amount :{userSubAmount}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Subscription Start Date :{userSubStartDate}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Subscription End Date :{userSubEndDate}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Subscription Type :{userSubType}
                </Typography>
            </div>


        )
    }









    const renderMessage =()=>{

        if(notification===true){
            console.log("subscription details edited")

            return (
                <div>
                    <GridItem xs={12} >
                        <div className="ui success message">

                            <div className="header">
                                Subscription Details Edited Succesfully!
                            </div>
                            You can see the updated details in the Subscriptions
                        </div>
                    </GridItem>
                </div>
            )
        }
        else if(notification===false){
            console.log("fill all  details")

            return (
                <div>
                    <GridItem xs={12} >
                        <div className="ui error message">
                            <div className="header">
                              Fill all the Selections
                            </div>
                            <p>You need to Provide Selections for Every Field</p>
                        </div>
                    </GridItem>
                </div>
            )

        }

        else {
            return (
                <div>
                    <GridItem xs={12} >
                        <div className="ui info message">
                            <div className="header">
                                Edit Your Subscription Here!
                            </div>
                            <p>You can  Change the starting Date According to your need</p>
                        </div>
                    </GridItem>
                </div>
            )
        }




    }






    return (


        <div margin ="20px" padding ="20px" >
            <div className="row">
                {renderMessage()}
            </div>

            <GridContainer>



                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">

                            <h4 className={classes.cardTitleWhite}>Edit Subscription</h4>
                            <p className={classes.cardCategoryWhite}>Edit Your Subscription Dates From Here </p>
                        </CardHeader>
                        <CardBody>


                            <GridContainer spacing={2}>
                                <Grid item xs={12}>
                                    {renderUserDetails()}


                                </Grid>
                            </GridContainer>


                            <GridContainer spacing={2}>
                                <Grid item xs={12}>
                                    <div >

                                        <div>
                                            <GridContainer spacing={2}>
                                                <GridItem xs={3}>
                                                    <div>
                                                        <Button color="success" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1}>
                                                            Edit Your Model Type
                                                        </Button>
                                                        <Menu
                                                            id="simple-menu"
                                                            anchorEl={anchorEl1}
                                                            keepMounted
                                                            open={Boolean(anchorEl1)}
                                                            onClose={handleClose1("")}
                                                        >
                                                            <MenuItem onClick={handleClose1("basic")}>Basic</MenuItem>
                                                            <MenuItem onClick={handleClose1("intermediate")}>Intermediate</MenuItem>
                                                            <MenuItem onClick={handleClose1("advanced")}>Advanced</MenuItem>
                                                        </Menu>

                                                    </div>
                                                </GridItem>

                                                <GridItem xs={3}>
                                                    <div>
                                                        <Button color="success" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}>
                                                            Edit Your Duration
                                                        </Button>
                                                        <Menu
                                                            id="simple-menu"
                                                            anchorEl={anchorEl2}
                                                            keepMounted
                                                            open={Boolean(anchorEl2)}
                                                            onClose={handleClose2("")}
                                                        >
                                                            <MenuItem onClick={handleClose2("week")}>Weekly</MenuItem>
                                                            <MenuItem onClick={handleClose2("month")}>Monthly</MenuItem>
                                                            <MenuItem onClick={handleClose2("annual")}>Annually</MenuItem>
                                                        </Menu>
                                                    </div>
                                                </GridItem>
                                                <GridItem xs={3}>
                                                    <TextField
                                                        id="datetime-local"
                                                        label="Start Date"
                                                        type="datetime-local"
                                                        defaultValue=""
                                                        className={classes.textField}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        value={selectedDate }
                                                        onChange={e => setSelectedDate(e.target.value)}
                                                    />
                                                </GridItem>

                                                <GridItem>
                                                    <FormControl component="fieldset">
                                                        <h7>Recurrent</h7>
                                                        <RadioGroup row aria-label="position" name="position" defaultValue="top">

                                                            <FormControlLabel

                                                                value={recurrent}
                                                                control={<Radio color="primary" />}
                                                                label="Yes"
                                                                labelPlacement="left"
                                                                onClick={handleRadioButton(1)}
                                                            />

                                                            <FormControlLabel
                                                                value="no"
                                                                control={<Radio color="primary" />}
                                                                label="No"
                                                                labelPlacement="right"
                                                                onClick={handleRadioButton(0)}
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>

                                                </GridItem>



                                            </GridContainer>
                                        </div>
                                    </div>
                                </Grid>
                            </GridContainer>







                            <Button
                                color="primary"
                                round
                                type="submit"
                                variant="contained"
                                className={classes.submit}
                                onClick={submitBack}
                            >
                                Back


                            </Button>

                            <Button
                                color="primary"
                                round
                                type="submit"
                                variant="contained"
                                className={classes.submit}
                                onClick={submitHandler}
                            >
                                Save


                            </Button>

                        </CardBody>

                    </Card>
                </GridItem>


            </GridContainer>
        </div>
    );
}
