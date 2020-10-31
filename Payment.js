import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import {payment} from "../../layouts/UserFunctions";
import TextField from "@material-ui/core/TextField";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";


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

export default function Payment() {
    const classes = useStyles();
    const history = useHistory();

    const [paymentType,setPaymentType]=useState("")
    useEffect(()=>{},[paymentType])

    const [paymentAmount,setPaymentAmount]=useState("")
    useEffect(()=>{},[paymentAmount])

    const [paymentEmail,setPaymentEmail]=useState("")
    useEffect(()=>{},[paymentEmail])

    const [paymentOwnerName,setPaymentOwnerName]=useState("")
    useEffect(()=>{},[paymentOwnerName])



    const submitHandler=(e)=> {
        e.preventDefault()




        const userPayment ={
            paymentType:paymentType ,
            paymentAmount: paymentAmount,
            paymentEmail: paymentEmail,
            paymentOwnerName: paymentOwnerName,

        }

        console.log(userPayment)


        payment(userPayment).then(res=>{
            console.log("Inside the Payment Function")


        })



    }





    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Payment Page</h4>
                            <p className={classes.cardCategoryWhite}>Make a Payment using Your signed in Email</p>
                        </CardHeader>
                        <CardBody>

                            <GridContainer spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="paymentEmail"
                                        label="Payment Email :"
                                        name="paymentEmail"
                                        autoComplete="paymentEmail"
                                        value={paymentEmail }
                                        onChange={e => setPaymentEmail(e.target.value)}
                                    />
                                </Grid>
                            </GridContainer>

                            <GridContainer spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="paymentType"
                                        label="Payment Type :"
                                        name="paymentType"
                                        autoComplete="paymentType"
                                        value={paymentType }
                                        onChange={e => setPaymentType(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="paymentAmount"
                                        label="Payment Amount :"
                                        name="paymentAmount"
                                        autoComplete="paymentAmount"
                                        value={paymentAmount }
                                        onChange={e => setPaymentAmount(e.target.value)}
                                    />
                                </Grid>
                            </GridContainer>



                            <GridContainer spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="User Name :"
                                        name="paymentOwnerName"
                                        autoComplete="paymentOwnerName"
                                        value={paymentOwnerName }
                                        onChange={e => setPaymentOwnerName(e.target.value)}
                                    />
                                </Grid>
                            </GridContainer>





                            <Button
                                color="primary"
                                round
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={submitHandler}
                            >
                                Pay


                            </Button>

                        </CardBody>

                    </Card>
                </GridItem>


            </GridContainer>
        </div>
    );
}
