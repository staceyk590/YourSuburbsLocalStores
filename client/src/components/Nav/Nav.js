import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Navbar'
import H1 from 'react-bootstrap/Navbar'
import $ from 'jquery';

function Nav() {
    $(window).resize(function(){
        $(".carousel-inner img").width(window.innerWidth - 30);
    });
    setTimeout(function(){
      $(".carousel-inner img").width(window.innerWidth - 30);
    }, 100);
  return (

    
    <div>
    <nav className="navbar ">
    <h1>
    YOUR LOCAL INDEPENDENT STORE
  </h1>
    <h2>Find a Cafe, Butcher, Fruit Shop, Bakery and Grocer In Your Suburb</h2>
    
      {/* <li className="nav-item">
        <Link to="/" >
          
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/newstore" >
        

          
          Add New Store
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" >
          
      Login
        </Link>
      </li> */}
   
    <div id="carouselExampleControls" width="100%"className="carousel slide" data-ride="carousel" data-interval="2000">
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img className="d-block" src="https://anfab.com/wp/wp-content/uploads/2017/11/canstockphoto13146150.jpg?w=1155h=1444"alt="First Slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h2>Your Neighbourhood Fruit Shop</h2>
    <p>Pickup or Delivery</p>
    <div className="carousel-description"></div>
  </div>
    </div>
    <div className="carousel-item">
      <img classname="d-block" src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/02/931/523/Grocery-Store-iStock.jpg?ve=1&amp;tl=1" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block" >
    <h2>Your Independant Grocer</h2>
    <p>Get Your Groceries delivered to your house</p>
    <div className="carousel-description"></div>
  </div></div>
    <div className="carousel-item">
      <img classname="d-block" src="https://cdn.broadsheet.com.au/cache/b4/44/b44499db970972aeb4b29f63afb9ebdb.jpg?"  alt="Third Slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h2>Your Local Cafe</h2>
    <p>Get Coffee and Lunch delivered from your favorite Cafe</p>
    <div className="carousel-description"></div>
  </div></div>
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



</nav>


<div className={"navbar-button"} style={{marginRight: "390px"}} onClick={homeOnClick}>Home</div>
  <div className={"navbar-button"} style={{marginRight: "220px"}} onClick={addYourStoreOnClick}>Add your Store</div>
  <div className={"navbar-button"} onClick={loginOnClick}>Login</div>
  <div className={"navbar-button"} style={{marginRight: "100px"}} onClick={signupOnClick}>Sign Up</div>
</div>
  );
}

function loginOnClick(){
  window.location = "/login";
}

function addYourStoreOnClick(){
  window.location = "/newstore";
}

function homeOnClick(){
  window.location = "/";
}

function signupOnClick(){
  window.location = "/signup";
}


{/* <div>
    <div className={"navbar-button"} onClick={loginOnClick}>Add your Store</div>
    </div>
    </div>
  );
}

function loginOnClick(){
  window.location = "/newstore";
}

<div>
    <div className={"navbar-button"} onClick={loginOnClick}>Login</div>
    </div>
    </div>
  );
}

function loginOnClick(){
  window.location = "/login";
} */}

export default Nav;


