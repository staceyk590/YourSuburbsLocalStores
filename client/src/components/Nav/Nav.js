import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
    <nav className="navbar ">
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
   
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="1000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=-Z4mLcB5" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg?w=1155&h=1444" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_2450,w_4368,x_0,y_165/v1562080363/shape/mentalfloss/29942-gettyimages-155302141.jpg?itok=-Z4mLcB5" alt="Third slide"/>
    </div>
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

{/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div> */}
  
  {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}

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


