import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="contact-us">
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>
        <div className="details">
          <div className="form">
            <span className="chat-call">
              <button>VIA CHAT SUPPORT</button>
              <button>VIA CALL</button>
            </span>
            <button>VIA EMAIL FORM</button>
            <input type="text" name="" id="" placeholder="NAME" />
            <input type="text" name="" id="" placeholder="E-MAIL" />
            <textarea name="" id="" placeholder="TEXT"></textarea>
            <div className="submit-btn-container">
              <button id="submit-btn">Submit</button>
            </div>
          </div>
          <div className="image">
            <img src="../public/Images/service.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
