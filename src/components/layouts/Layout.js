import "../../style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
function Layout(props) {
  return (
    <Container className="container logincontainer">
      <Row className="min-vh-100">{props.children}</Row>
    </Container>
  );
}
function LoginTitle() {
  return (
    <div>
      <h4>Sign In</h4>
      <h6>New user?&nbsp;</h6>
      <a href="#">Create an account</a>
    </div>
  );
}
function Header(props) {
  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#All">All</Nav.Link>
            <Nav.Link href="#Asia">Asia</Nav.Link>
            <Nav.Link href="#Europe">Europe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
function SocialLinks() {
  return (
    <div class="d-flex justify-content-center">
      <Image src="/assets/facebook.png" />
      <Image src="/assets/twitter.png" className="ml-4" />
      <Image src="/assets/linkedin.png" className="ml-4" />
      <Image src="/assets/youtube.png" className="ml-4" />
    </div>
  );
}
function Footer(props) {
  return (
    <footer>
      <Container>
        <Row>
          <SocialLinks />
          <div class="d-flex justify-content-center mt-3">
            <small>Example@email.com</small>
          </div>
          <div class="d-flex justify-content-center ">
            <small>Copyright © 2020 Name. All rights reserved.</small>
          </div>
        </Row>
      </Container>
    </footer>
  );
}
export { Layout, LoginTitle, Header, Footer, SocialLinks };
