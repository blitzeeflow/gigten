import {
  Col,
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardText,
} from "react-bootstrap";
import Header from "./src/header/header";

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <Row className="hero">
          <Col className="flex-center">
            <div className="overlay-colour"></div>
            <h1>
              Discover Your Perfect
              <br /> Gig Instantly
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="tagline">
            <h2>Quality Service and Unbeatable Price</h2>
          </Col>
        </Row>
      </Container>
      <Container className="main">
        <Row>
          <Col>
            <h2>Popular services</h2>
            <Container>
              <Row className="popular">
                <Col>
                  {" "}
                  <Card>
                    <CardImg variant="top" src="images/popular-2.png" />
                    <CardBody>
                      <CardText>Script Writing</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardImg variant="top" src="images/popular-3.png" />
                    <CardBody>
                      <CardText>Podcast Writing</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardImg variant="top" src="images/popular-4.png" />
                    <CardBody>
                      <CardText>Creative Writing</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardImg variant="top" src="images/popular-5.png" />
                    <CardBody>
                      <CardText>Marketing Copy</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardImg variant="top" src="images/popular-6.png" />
                    <CardBody>
                      <CardText>Website Content</CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer">
        <Row>
          <Col>© GigTen. 2024</Col>
        </Row>
      </Container>
    </>
  );
}
