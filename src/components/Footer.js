import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h2 style={{color:"white"}}>KN</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kritartha-nath-27898718b/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/kritartha.nath.1/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/kritartha_nath/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
        
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
