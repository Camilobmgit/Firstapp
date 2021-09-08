import { Navbar,Container,Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Header = (props) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pag1">Pag1</Nav.Link>
            <Nav.Link href="/pag2">Pag2</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        // <div>
        //     <nav>
        //   <ul>
        //     <li>
        //       <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //       <Link to="/pag1">Pag1</Link>
        //     </li>
        //     <li>
        //       <Link to="/pag2">Pag2</Link>
        //     </li>
        //   </ul>
        // </nav>
            
        // </div>
    );
}

export default Header;