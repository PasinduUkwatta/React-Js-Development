import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import axios from "axios"

import avatar from "../../assets/img/faces/marc.jpg";

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

export default function UserProfile() {

  const [firstName,setFirstName]=useState("")
  useEffect(()=>{},[firstName])

  const [lastName,setLastName]=useState([])
  useEffect(()=>{},[lastName])

  const [email,setEmail]=useState([])
  useEffect(()=>{},[email])

  const [no,setNo]=useState([])
  useEffect(()=>{},[no])

  const [lane,setLane] =useState([])
  useEffect(()=>{},[lane])

  const [city,setCity] =useState([])
  useEffect(()=>{},[city])

  const [province,setProvince] =useState([])
  useEffect(()=>{},[province])

  const [country,setCountry] =useState([])
  useEffect(()=>{},[country])

  const [zipCode,setZipCode] =useState([])
  useEffect(()=>{},[zipCode])

  const [businessName,setBusinessName]=useState([])
  useEffect(()=>{},[businessName])

  const [businessRegNo,setBusinessRegNo] =useState([])
  useEffect(()=>{},[businessRegNo])

    const [user,setUser] =useState([])
    useEffect(()=>{},[user])






    useEffect(()=>{


    let auth = localStorage.getItem('accessTokenLogin');
    console.log(auth)

    console.log(typeof(auth))
    axios.post('/protected',null,{
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': "Bearer" + " " + auth,
      }
    })
        .then(responce=>{
          console.log(responce)

          var user_email =(responce.data.user_email).toString()

          console.log(user_email)
          console.log(typeof (user_email))
          axios.post('/user-details',{
            email: user_email,

          })
              .then(responce=>{

                console.log(responce)

                const userDetails={
                  firstName:responce.data[0].user_results[0][1],
                  lastName:responce.data[0].user_results[0][2],
                  email:responce.data[0].user_results[0][3],
                  line1:responce.data[1].address_results[0][1],
                  line2 :responce.data[1].address_results[0][2],
                  city:responce.data[1].address_results[0][4],
                  state:responce.data[1].address_results[0][5],
                  country:responce.data[1].address_results[0][6],
                  postalcode:responce.data[1].address_results[0][3],
                  businessName:responce.data[2].business_results[0][1],
                  businessRegNo:responce.data[2].business_results[0][3]
                }

                console.log(userDetails)





              })

        })



  })


  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>User Profile</h4>
              <p className={classes.cardCategoryWhite}> Your Profile Details</p>
            </CardHeader>

          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
