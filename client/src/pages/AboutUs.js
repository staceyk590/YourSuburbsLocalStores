import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, label} from "../components/Form";

function AboutUs() {
    return (
      <div style={{textAlign: "center"}}>
          Let us help connect both you as a small independent store or you as a consumer that needs to find out which local stores are in your suburb.
      
              Add your store and all your details to make your business more known to your local community.  
         
          
          As a consumer, do a search in your suburb to find where you can purchase food, coffee, produce or supplies.  Providing you with access to a cheaper and more efficient way of shopping.

      </div>
      
    );
    }


export default AboutUs;
