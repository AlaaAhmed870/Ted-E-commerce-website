// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// // import { createUserWithEmailAndPassword } from 'firebase/auth';
// // import {auth} from "../FireBase/Setup"

// // function SignUp(){
    
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const SignUpForm = (e) => {
// //     e.preventDefault();
// //     // Handle registration logic here
// //     createUserWithEmailAndPassword(auth, email, password)
// //     .then((useCredintial) => {
// //         console.log(useCredintial)
// //         navigate('/');
// //     }).catch((err)=> {
// //       console.log(err.message)
// //     })
// //   };

// //   return (
// //     // <div className="container">
// //     //   <h2>Sign Up</h2>
// //     //   <form onSubmit={handleSubmit}>
// //     //     <div className="mb-3">
// //     //       <label>Email:</label>
// //     //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //     //     </div>
// //     //     <div className="mb-3">
// //     //       <label>Password:</label>
// //     //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //     //     </div>
// //     //     <button type="submit">Sign Up</button>
// //     //   </form>
// //     // </div>

// //     //..................
    
  
   


// // ////////////////////




// // // <section className="bg-primary py-3 py-md-5 py-xl-8">
// // //   <div className="container">
// // //     <div className="row gy-4 align-items-center">
// // //       <div className="col-12 col-md-6 col-xl-7">
// // //         <div className="d-flex justify-content-center text-bg-primary">
// // //           <div className="col-12 col-xl-9">
// // //             <hr className="border-primary-subtle mb-4"/>
// // //             <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
// // //             <p className="lead mb-5">We write words, take photos, make videos, and interact with artificial intelligence.</p>
// // //             <div className="text-endx">
// // //               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
// // //                 <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
// // //               </svg>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className="col-12 col-md-6 col-xl-5">
// // //         <div className="card border-0 rounded-4">
// // //           <div className="card-body p-3 p-md-4 p-xl-5">
// // //             <div className="row">
// // //               <div className="col-12">
// // //                 <div className="mb-4">
// // //                   <h2 className="h3">Registration</h2>
// // //                   <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <form onSubmit={SignUpForm}>
// // //               <div classNameName="row gy-3 overflow-hidden">
// // //                 <div classNameName="col-12">
// // //                   <div classNameName="form-floating mb-3">
// // //                     <input type="text" classNameName="form-control" name="firstName" id="firstName" placeholder="First Name" required/>
// // //                     <label for="firstName" classNameName="form-label"></label>
// // //                   </div>
// // //                 </div>
// // //                 <div classNameName="col-12">
// // //                   <div classNameName="form-floating mb-3">
// // //                     <input type="text" classNameName="form-control" name="lastName" id="lastName" placeholder="First Name" required/>
// // //                     <label for="lastName" classNameName="form-label"></label>
// // //                   </div>
// // //                 </div>
// // //                 <div classNameName="col-12">
// // //                   <div classNameName="form-floating mb-3">
// // //                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required/>
// // //                     <label for="email" classNameName="form-label"></label>
// // //                   </div>
// // //                 </div>
// // //                 <div classNameName="col-12">
// // //                   <div classNameName="form-floating mb-3">
// // //                     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
// // //                     <label for="password" className="form-label"></label>
// // //                   </div>
// // //                 </div>
// // //                 <div className="col-12">
// // //                   <div className="form-check">
// // //                     <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
// // //                     <label className="form-check-label text-secondary" for="iAgree">
// // //                       I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
// // //                     </label>
// // //                   </div>
// // //                 </div>
// // //                 <div className="col-12">
// // //                   <div className="d-grid">
// // //                     <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </form>
// // //             <div className="row">
// // //               <div className="col-12">
// // //                 <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
// // //                   <p className="m-0 text-secondary text-center">Already have an account? <Link to="/signin" className="link-primary text-decoration-none">Sign in</Link></p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="row">
// // //               <div className="col-12">
// // //                 <p className="mt-4 mb-4">Or continue with</p>
// // //                 <div className="d-flex gap-2 gap-sm-3 justify-content-centerX">
// // //                   <Link to="#!" className="btn btn-outline-danger bsb-btn-circle bsb-btn-circle-2xl">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
// // //                       <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
// // //                     </svg>
// // //                   </Link>
// // //                   <Link to="#!" className="btn btn-outline-primary bsb-btn-circle bsb-btn-circle-2xl">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
// // //                       <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
// // //                     </svg>
// // //                   </Link>
// // //                   <Link to="#!" className="btn btn-outline-dark bsb-btn-circle bsb-btn-circle-2xl">
// // //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
// // //                       <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
// // //                       <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
// // //                     </svg>
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </section>


// //   );
// // };

// // export default SignUp;






// import React, { useState ,useNavigate } from 'react';
// import { Form, Button, Container, Row, Col, Card, ButtonGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import {auth} from "../FireBase/Setup"

// const SignUp = () => {

//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState('false');
//   const navigate = useNavigate();

//   const handlePasswordToggle = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((useCredintial) => {
//         console.log(useCredintial)
//         navigate('/');
//     }).catch((err)=> {
//       console.log(err.message)
//     })
//   };






//   return (
//     <section className="ftco-section bg-section"
//     style={{ backgroundImage: 'url(src/Components/img/login2.jpg)', height: '543px' }}>
//       <Container>
//         <Row className="justify-content-center mb-5">
//           <Col md={6} className="text-center">
//             <h2 className="heading-section"></h2>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           <Col md={6} lg={4}>
//             <Card className="p-4">
//               <Card.Body>
//                 <Card.Title className="text-center mb-4">Have an account?</Card.Title>
//                 <Form>
//                   <Form.Group className="mb-3">
//                     <Form.Control
//                       type="text"
//                       placeholder="Username"
//                       required
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3 position-relative">
//                     <Form.Control
//                       type={showPassword ? 'text' : 'password'}
//                       placeholder="Password"
//                       required
//                     />
//                     <i
//                       className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute`}
//                       style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
//                       onClick={handlePasswordToggle}
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Button variant="primary" type="submit" className="w-100">
//                       Sign In
//                     </Button>
//                   </Form.Group>
//                   <Row className="d-md-flex align-items-center">
//                     <Col md={6}>
//                       <Form.Check
//                         type="checkbox"
//                         id="remember-me"
//                         label="Remember Me"
//                         defaultChecked
//                       />
//                     </Col>

//                     <Col md={6} className="text-md-end">
//                       <Link to="#" className="text-decoration-none">Forgot Password</Link>
//                     </Col>
//                   </Row>
//                 </Form>
//                 <p className="text-center my-4">— Or Sign In With —</p>
//                 <div className="d-flex justify-content-center">
//                   <Link to="#" className="btn btn-outline-primary mx-1">
//                     <i className="fab fa-facebook-f me-2"></i> Facebook
//                   </Link>
//                   <Link to="#" className="btn btn-outline-info mx-1">
//                     <i className="fab fa-twitter me-2"></i> Twitter
//                   </Link>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default SignUp;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBase/Setup';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); // Added state for Full Name
  const [error, setError] = useState(''); // Added state for error handling
  const [isSubmitting, setIsSubmitting] = useState(false); // Added state to manage button state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Handle registration logic here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/');
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="ftco-section bg-section"
    style={{ backgroundImage: 'url(src/Components/img/login2.jpg)', height: '543px' }}>
         <div className="container my-3 py-3" >
      <h1 className="text-center">Register</h1>
      <hr />
      <div className="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="Name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Enter Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="my-3">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-decoration-underline text-info">
                  Login
                </Link>
              </p>
            </div>
            <div className="text-center">
              <button
                className="my-2 mx-auto btn btn-dark"
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default SignUp;

