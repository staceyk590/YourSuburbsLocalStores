import axios from "axios";

export default {
  // Gets all stores
  getStores: function() {
    return axios.get("/api/stores");
  },
  // Gets the book with the given id
  getStore: function(id) {
    return axios.get("/api/stores/" + id);
  },
  searchStores: function(store){
    return axios.get("/api/stores/search/" + store);
  },
  // Deletes the book with the given id
  deleteStore: function(id) {
    return axios.delete("/api/stores/" + id);
  },
  // Saves a book to the database
  saveStore: function(storesData) {
    return axios.post("/api/stores", storesData);
  },
  // Saves a signup account to the database
  saveSignUp: function(signupData) {
    return axios.post("/api/signup", signupData);
  },

  

};
