import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2V8ZW58MHx8MHx8&w=1000&q=80",

    address: "112,LA",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://images.unsplash.com/photo-1615559108290-5e8ab1443acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&w=1000&q=80",

    address: "23462,CA",
    description: "This is the second meetup",
  },
];

function HomePage() {
  return (
    <div>
      <MeetupList meetups={props.meetups}></MeetupList>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
