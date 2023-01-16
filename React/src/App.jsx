import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiFillInstagram, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Hero from "./assets/hero.jpg"

function App() {
  return (
    <Form className='form'>
        <Form className='form1'>
            <h1 className='create width'>Login</h1>

            <Form.Group className="mb-3 width" controlId="formBasicEmail">
              <Form.Control className="width input" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3 width" controlId="formBasicPassword">
              <Form.Control className="width input" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 width" controlId="formBasicCheckbox">
              <Form.Check className="mb3" type="checkbox" label="I agree to your Terms and Conditions" />
            </Form.Group>

            <Button className="width signup" variant="primary" type="submit">
              Sign up
            </Button>

            <div className="width icons">
              <a href="#" className="icon"><FaFacebookF className='myI'/></a>
              <a href="#" className="icon"><AiOutlineGoogle className='myI'/></a>
              <a href="#" className="icon"><AiFillInstagram className='myI'/></a>
              <a href="#" className="icon"><BsTwitter className='myI'/></a>
            </div>

            <p className="width signin">Aready have an account? <a href='#'>Sign in</a></p>

        </Form>

        <Form className='form2'>
          <img className='hero' src={Hero} alt="hero-img" />
        </Form>

    </Form>
  );
}

export default App;


