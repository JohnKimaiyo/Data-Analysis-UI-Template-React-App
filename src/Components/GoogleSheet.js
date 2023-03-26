import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function GoogleSheet() {
  return (
    <Card className="card">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <a
          href="https://github.com/JohnKimaiyo/Chennai-housing-Sales/blob/main/src/Power%20BI%20%20Dashboard/Chennai%20Dashboard.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the Dashboard Here
        </a>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
