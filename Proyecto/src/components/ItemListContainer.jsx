import Container from "react-bootstrap/Container";

export const ItemListContainer = (props) => {
  return (
    <Container className="mt-4 d-flex justify-content-center align-items-center full-height">
      <h1>{props.greeting}</h1>
    </Container>
  );
};
