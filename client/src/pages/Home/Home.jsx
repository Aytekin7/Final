import React from "react";
import style from "./home.module.css";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
       
      </Helmet>
      <div className={style.about}>
        <div>
          <p>PROCESS VISA WITHOUT WITHIN HOURS</p>
          <h1>
            Immigrations &<br />
            Visa Consultation
          </h1>
          <button
            style={{ marginLeft: "70px", height: "40px", width: "200px" }}
          >
            Book Consultancy
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
