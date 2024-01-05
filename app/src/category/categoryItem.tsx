import { Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap";

export interface CategoryItemProps {
  title: string;
  name: string;
  image: string;
  category: string;
  id: number;
}
export default function CategoryItem(props: CategoryItemProps) {
  const { title, image, name, id, category } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <a href={"/service?id=" + id + "&category=" + category}>
        <CardImg variant="top" src={image} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>Ad by {name}</CardText>
          <span>
            <strong>£10</strong>
          </span>
        </CardBody>
      </a>
    </Card>
  );
}
