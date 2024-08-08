import { Link } from "react-router-dom"



function Navbar() {
    
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div className="container">
                <Link className="navbar-brand fs-3 fw-bolder" to="/">
                    TED
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="/">Home</Link>
                    <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="/cart">Shopping Cart </Link>
                    <Link className="nav-link text-dark mx-1 fs-5 fw-bold" to="#">Account</Link>

                </div>
                </div>
            </div>
            </nav>
        </>
    );
}

export default Navbar;






// import { Link } from "react-router-dom"


// const Navbar = () => {

//   return (
//     <div className="w-full px-1 shadow-emerald-50 py-5 border nav1">
//         <div className="flex justify-between nav2">
//             <Link to='/'>SoftMart</Link>
//             <div className="flex space-x-3">
//                 <Link to='/'>Account</Link>
//                 {/* <Link to='/cart'>Cart({cartItems.length})</Link> */}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar