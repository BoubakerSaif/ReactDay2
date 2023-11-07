import React from "react";
import { Card } from "react-bootstrap";

const Profile = ({ name, imageUrl }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
