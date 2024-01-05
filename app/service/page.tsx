"use client";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Header from "../src/header/header";
import { useSearchParams } from "next/navigation";
import { categoryConfig } from "../src/category-config";
import Avatar from "../src/avatar";

export default function Service() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("id");
  const categoryId = searchParams.get("category");
  const item = categoryId
    ? (categoryConfig as any)[categoryId][Number(serviceId)]
    : null;
  return (
    <Container fluid className="service-page page">
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Col className="flex-h">
                      <Avatar image={item.image} />
                      <div>
                        <h1>{item.title}</h1>
                        <span>{item.name}</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={item.serviceImage} />
                    </Col>
                  </Row>
                  <Row className="margin-top-20">
                    <Col>
                      <h2>About this Gig</h2>
                      <p>
                        Do you need quality blog content for your website? If
                        so, you&apos;ve come to the right place! I&apos;m happy
                        to announce I am now offering blog content packages! So,
                        regardless if you need one 500-word article or a
                        month&apos;s worth of blog posts, I&apos;m ready to
                        help! I can write informational/engaging posts on a wide
                        range of topics including travel, pets, lifestyle,
                        family, history, real estate, business, and more. I am
                        willing to do research on topics I am not knowledgeable
                        about, but please contact me first.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col>
                <Col>
                  <div className="gig-info">
                    <Card style={{}}>
                      <CardBody>
                        <CardTitle>Gig Info</CardTitle>
                        <CardText>
                          <span className="gig-info-price">£10</span>
                          <p>
                            1x 500-word unique article 500-word unique article
                            on the topic of your choice.
                          </p>
                          <p>3 Days Delivery</p>
                          <p>2 revision</p>
                          <p>Number of words 500</p>
                          <a
                            href={`/chat?category=${categoryId}&service=${serviceId}`}
                          >
                            <Button>Continue</Button>
                          </a>
                        </CardText>
                      </CardBody>
                    </Card>
                    {/* <Button className="contact-me-button margin-top-20">
                      Contact Me
                    </Button> */}
                  </div>
                </Col>
              </Col>
            </Row>
            <Row className="service-ads"></Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
