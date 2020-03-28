import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, label} from "../components/Form";

function AddStore() {
  // Setting our component's initial state
  const [stores, setStores] = useState([])
  const [formObject, setFormObject] = useState({})


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.suburb && formObject.nameOfStore) {
      API.saveStore({
        suburb: formObject.suburb,
        nameOfStore: formObject.nameOfStore,
        phoneNumber: formObject.phoneNumber,
        pickup: formObject.pickup === "on" ? true : false, 
        delivery: formObject.delivery === "on" ? true : false,
        details: formObject.details,
        website: formObject.website
      })
        .then(res => {
          console.log(res)
          setFormObject({})
          window.location.replace("/")


        
          
        })
        .catch(err => console.log(err))
    }
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div style={{backgroundColor: "lightgray"}}>
            <Jumbotron>
              <h1>Add my store to the database</h1>
            </Jumbotron>
            <form>
            <div className="list-overflow-container">

              <Input
                onChange={handleInputChange}
                name="suburb"
                placeholder="Suburb (Required)"
                value={formObject.suburb}
              />
              <Input
                onChange={handleInputChange}
                name="nameOfStore"
                placeholder="Name Of Store (required)"
                value={formObject.nameOfStore}
              />
              <Input
                onChange={handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (required)"
                value={formObject.phonenumber}
              />

              <Row>
                <Col size="xs-3 sm-2">
                  <input type="checkbox" className="filled-in" id="filled-in-box"
                  checked={formObject.pickup} name="pickup"
                  onChange={handleInputChange}
                  />
                  <label htmlFor="filled-in-box">  Pickup Available</label>
                </Col>
               
                <Col size="xs-3 sm-2">
                  <input type="checkbox" className="filled-in" id="filled-in-box"
                  checked={formObject.delivery} name="delivery"
                  onChange={handleInputChange}/>
                  <label htmlFor="filled-in-box">  Delivery Available</label>
                </Col>
               </Row>
               <Input
                onChange={handleInputChange}
                name="website"
                placeholder="Website"
                value={formObject.website}
              />

              <TextArea
                onChange={handleInputChange}
                name="details"
                placeholder="Details"
                value={formObject.details}
              />
              <FormBtn
                disabled={!(formObject.suburb && formObject.nameOfStore)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
              </div>
            </form>
        
           </div>
          </Col>
          
        </Row>
      </Container>
   
     
      
    );
  }


export default AddStore;
