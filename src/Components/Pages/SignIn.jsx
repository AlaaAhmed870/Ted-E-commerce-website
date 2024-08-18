import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../FireBase/Setup";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetSuccess, setResetSuccess] = useState('');

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Navigate to another page or handle successful sign-in
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          setError('No account found with this email address.');
        } else {
          setError('An error occurred during sign-in.');
        }
        console.error(err.message);
      });
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        setResetSuccess('Password reset email sent successfully.');
        setError('');
      })
      .catch((err) => {
        setResetSuccess('');
        if (err.code === 'auth/user-not-found') {
          setError('No account found with this email address.');
        } else {
          setError('An error occurred while sending the password reset email.');
        }
        console.error(err.message);
      });
  };

  return (
    <section className="ftco-section bg-section"
      style={{ backgroundImage: 'url(src/Components/img/login2.jpg)', height: '543px' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={6} className="text-center">
            <h2 className="heading-section">Sign In</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="p-4">
              <Card.Body>
                {isForgotPassword ? (
                  <div>
                    <Card.Title className="text-center mb-4">Forgot Password</Card.Title>
                    {resetSuccess && <div className="alert alert-success">{resetSuccess}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form onSubmit={handlePasswordReset}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Button variant="primary" type="submit" className="w-100">
                          Send Password Reset Email
                        </Button>
                      </Form.Group>
                      <Button variant="link" onClick={() => setIsForgotPassword(false)}>
                        Back to Sign In
                      </Button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <Card.Title className="text-center mb-4">Have an account?</Card.Title>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form onSubmit={handleSignIn}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3 position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <i
                          className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute`}
                          style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                          onClick={handlePasswordToggle}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Button variant="primary" type="submit" className="w-100">
                          Sign In
                        </Button>
                      </Form.Group>
                      <Row className="d-md-flex align-items-center">
                        <Col md={6}>
                          <Form.Check
                            type="checkbox"
                            id="remember-me"
                            label="Remember Me"
                            defaultChecked
                          />
                        </Col>
                        <Col md={6} className="text-md-end">
                          <Button variant="link" onClick={() => setIsForgotPassword(true)}>
                            Forgot Password
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                    <p className="text-center my-4">— Or Sign In With —</p>
                    <div className="d-flex justify-content-center">
                      <Link to="#" className="btn btn-outline-primary mx-1">
                        <i className="fab fa-facebook-f me-2"></i> Facebook
                      </Link>
                      <Link to="#" className="btn btn-outline-info mx-1">
                        <i className="fab fa-twitter me-2"></i> Twitter
                      </Link>
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
