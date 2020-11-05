import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {useHistory} from "react-router-dom";
import axios from "axios";
import EmailIcon from '@material-ui/icons/Email';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/#">
                Recce Labs (PVT) Ltd
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function GetEmail() {
    const classes = useStyles();
    const history = useHistory();


    const [email,setEmail]=useState("")
    useEffect(()=>{},[email])


    const submitHandler = e => {
        e.preventDefault()
        console.log(email)

    }


    const handleClick = (e) => {
        e.preventDefault()
        console.log(email)
        axios.post("/code-genarator",{
            email:email
        })
            .then(response => {
                console.log(response)
                console.log(response.data.code)
                localStorage.setItem('code',response.data.code)






        axios.post("/email-check",{
            email:email,




        })
            .then(response => {
                console.log(response)
                if((response.data[1].result_code.toString())==="200"){
                    axios.post("/send-email",{
                        email:email,
                        code:localStorage.getItem('code')
                    })


                    localStorage.setItem('id',response.data[0].result[0][0])
                    localStorage.setItem('firstName',response.data[0].result[0][1])
                    localStorage.setItem('lastName',response.data[0].result[0][2])
                    localStorage.setItem('email',response.data[0].result[0][3])
                    localStorage.setItem('password',response.data[0].result[0][4])

                     history.push("/get-password-code");

                }

                else{
                    history.push("/sign-up");

                }

            })


            })

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <EmailIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Previous Email Address Verification

                </Typography>
                <br/>
                <br/>
                <Grid item xs={12} >
                    <h5 style={{justifyContent: 'center'}}>We Need to Verify Your Previous Email Address , Please Enter Your Previous Email Address</h5>

                </Grid>


                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Enter Your Previous Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                            {/*    label="I want to receive inspiration, marketing promotions and updates via email."*/}
                            {/*/>*/}
                        </Grid>
                    </Grid>
                    <div style={{justifyContent: 'center'}}>
                        <Button
                            style={{maxWidth:"200px",marginRight:"20px",marginLeft:"140px",justifyContent: 'center'}}
                            type="submit"

                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                        >
                            Confirm Email
                        </Button>


                    </div>

                    <Grid container justify="flex-end">
                        {/*<Grid item xs>*/}
                        {/*    <Link href="/sign-in" variant="body2">*/}
                        {/*        Already have an account? Sign in*/}
                        {/*    </Link>*/}
                        {/*</Grid>*/}
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}