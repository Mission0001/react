import React from 'react'; 
import { Link } from 'react-router-dom';

    const mystyle = {
      color: 'tomato', 
      fontSize: "25px", 
      fontFamily: "serif",
    }

const Header = () =>{
    return(
      <div>

        <div className='body'>
      
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "white" }}>
          <div className="container-fluid">
            <Link className="nav-link" to="/" style={{color: "black", fontSize: "30px", fontFamily: "cursive"}}>BURGER N' BITE</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item" >
                  <Link className="nav-link" to="/" style={mystyle}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/menu" style={mystyle}>Menu</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about" style={mystyle}>About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact" style={mystyle}>Contact</Link>
                </li>
              </ul>

              <div>

              <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search"></input>
              <button className="btn btn-primary" style={{backgroundColor: 'tomato'}} type="button">Search</button>
            </form>
          
            
            </div>
          </div>
          </div>
          
    </nav>

    </div>
    </div>
    
    )
}
export default Header;




