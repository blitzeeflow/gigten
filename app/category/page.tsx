"use client";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../src/header/header";
import { useSearchParams } from "next/navigation";
import { CategoryId, getCategoryNameById } from "../src/util/utils";
import CategoryItem from "../src/category/categoryItem";
import { categoryConfig } from "../src/category-config";

export default function Category() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("id");

  return (
    <Container fluid className="category-page page">
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
                <h1>{getCategoryNameById(categoryId as CategoryId)}</h1>
              </Col>
            </Row>
            <Row className="category-ads">
              {categoryId &&
                (categoryConfig as any)[categoryId].map(
                  (item: any, index: number) => (
                    <CategoryItem
                      title={item.title}
                      key={index}
                      image={item.image}
                      name={item.name}
                      id={index}
                      category={categoryId}
                    />
                  )
                )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
