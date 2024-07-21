import { Fragment } from "react";
import { Container, Navbar, Nav, Form, Col, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbars() {
    return (
        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-centr"><img src="/king.png" width={25} height={25} alt="" className="mx-1" /> IMaxTv</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Saytlar</Nav.Link>
                        <Nav.Link href="#features">Text tekshirish</Nav.Link>
                        <Nav.Link href="#pricing">Qo'shiqlar</Nav.Link>
                        <Nav.Link href="#pricing">Chat</Nav.Link>
                        <Nav.Link href="#pricing">Donatelar</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>

            </Navbar>
        </Fragment>
    )
}
export default Navbars;