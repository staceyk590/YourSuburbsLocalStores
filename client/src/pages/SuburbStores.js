import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function SuburbStores() {
  // Setting our component's initial state
  const [stores, setStores] = useState([])
  const [suburbSearch, setSuburbSearch] = useState([])
  const [formObject, setFormObject] = useState({})

  
  useEffect(() => {
      console.log("useEffect hit");
      console.log(stores);
  },[stores])
  // Deletes a book from the database with a given id, then reloads books from the db
  const searchStores = (e) => {
    e.preventDefault();
      console.log(suburbSearch)
    API.searchStores(suburbSearch)
      .then(res => setStores(res.data))
      .catch(err => console.log(err));
  }

    
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


  const handleSearchChange = (event) => {
    console.log("search input change");
    const { name, value } = event.target;
    setSuburbSearch(value);
    //setFormObject({...formObject, [name]: value})
  };


  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveStore({
        suburb: formObject.suburb,
        nameOfStore: formObject.nameOfStore,
        phoneNumber: formObject.phoneNumber,
        delivery: formObject.delivery,
        pickup: formObject.pickup,
        details: formObject.details,
        website: formObject.website
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };


    return (
      <Container fluid>
        <Row>
      
          <Col size="md-12 sm-12">
          
          <div style={{backgroundColor: "lightgray"}}>
            <Jumbotron>
            
            <Col size="md-12">
            <form>
              <Container>
              
                <Row>
                  <Col size="xs-9 sm-10">
                  <div className={"searchbar-text"}>Search Stores In Your Suburb</div>
                    <Input
                      name="suburbSearch"
                      value={suburbSearch}
                      onChange={handleSearchChange}
                      placeholder="Add your Suburb"
                    />
                    {/* <div className="search-button"> */}
                       <FormBtn
                      onClick={searchStores}
                      
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </FormBtn>
                    {/* </div> */}
                  </Col>
                  <Col size="xs-3 sm-2">
                  
                  </Col>
                </Row>
                
              </Container>
            </form>
          </Col>
        
          </Jumbotron>
          {/* </div> */}

          {/* <Row>
          <Col size="xs-12">
            {!stores.length ? (
              <h1 className="text-center">No Stores to Display</h1>
            ) : (
              <List>
                {stores.map(store => {
                  return (
                    <ListItem
                      suburb={store.suburb}
                      nameofStore={store.nameOfStore}
                      // href={store.href}
                      phonenumber={store.phoneNumber}
                      // thumbnail={store.thumbnail}
                      pickup={store.pickup}
                      delivery={store.delivery}
                    />
                  );
                })}
              </List>
            )}
          </Col>
        </Row> */}
            {/* <div class="list-overflow-container"> */}
            {stores.length > 0 ? 
              <List>
              <div class="list-overflow-container">

                {stores.map(store => {
                  return (
                    <ListItem key={store._id}>
                    
                    <div style={{paddingRight: "3px", fontWeight: "bold"}}>{store.suburb}</div>
                    <div style={{paddingRight: "3px"}}>{store.nameOfStore}</div>
                    <div style={{paddingRight: "3px"}}>{store.phoneNumber}</div>
                    <div style={{paddingRight: "3px"}}>{store.delivery ? "Yes" : "No"}</div>
                    <div style={{paddingRight: "3px"}}>{store.pickup ? "Yes" : "No"}</div>
                  <div style={{paddingRight: "3px"}}>{store.website !== "" ? <a href={"https://" + store.website}>{store.website}</a> : "No link"}</div>

                      {/* <a href={"/stores/" + store._id}>
                        <strong>
                          {store.suburb} 
                          {store.nameOfStore}
                          {store.phoneNumber}
                          {store.delivery}
                          {store.pickup}

                        </strong> */}
                      {/* </a> */}

                    </ListItem>
                  );
                })}
                </div>
              </List>       
      :
              <div style={{textAlign: "center", fontSize: "16px", minHeight: "300px"}}>No Results to Display</div>
            }
          </div>
          </Col>
          
        </Row>
      </Container>
      
    );
    
  }


export default SuburbStores;
