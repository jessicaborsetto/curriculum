import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import Cards from './components/Cards';
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {

  return (
    <>
      <Navbar className='fixed-top navbar'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white title'>Home</Nav.Link>
            <Nav.Link href="#about" className='text-white title'>About Me</Nav.Link>
            <Nav.Link href="#contacts" className='text-white title'>Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div>
      <Header></Header>
      </div>
      
      <Container>
        <About></About>
      </Container>

      <Contacts></Contacts>
    </>
  )
}

export default App

