// import { Link } from "react-router-dom"



// function Navbar() {
    
//     return ( 
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
//             <div className="container">
//                 <Link className="navbar-brand fs-3 fw-bolder" to="/">
//                 <img className="img-fluid rounded mb-4" loading="lazy" src="./src/Components/img/ted-logo.png" width="245" height="80" alt="BootstrapBrain Logo"/>
//                 </Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div className="navbar-nav ms-auto">
//                     <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="/">Home</Link>
//                     <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="/cart">Shopping Cart </Link>
//                     <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="/signin">Sign In</Link>
//                     <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="/signup">Sign Up</Link>
//                     <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="/signout">Sign Out</Link>
//                 </div>
//                 </div>
//             </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;






// // import { Link } from "react-router-dom"


// // const Navbar = () => {

// //   return (
// //     <div className="w-full px-1 shadow-emerald-50 py-5 border nav1">
// //         <div className="flex justify-between nav2">
// //             <Link to='/'>SoftMart</Link>
// //             <div className="flex space-x-3">
// //                 <Link to='/'>Account</Link>
// //                 {/* <Link to='/cart'>Cart({cartItems.length})</Link> */}
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Navbar






//(the prefinal navbar)

// src/components/Shared/Navbar.js

import {Link ,NavLink } from 'react-router-dom'
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Navbar() {
  const [user, setUser] = useState(null);
  
  // Monitor user authentication status
  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bolder" to="/">
        <img className="img-fluid rounded mb-4" loading="lazy" src="./src/Components/img/ted-logo.png" width="100" height="50" alt="BootstrapBrain Logo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/" className="btn btn-outline-dark m-2"><i class="fa-solid fa-house"></i> Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signin" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/wishlist" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Wishlist  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger fs-5"
                  onClick={() => {
                    auth.signOut().then(() => {
                      // Successfully signed out
                      setUser(null);
                    }).catch((error) => {
                      // Error occurred
                      console.error('Sign out error:', error);
                    });
                  }}
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
