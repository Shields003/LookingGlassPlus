import React from "react";
import { Card } from "react-bootstrap";

//This is the home page for the application.  It is the default page that is displayed when the application is launched.

const Home = () => {
  return (
    <Card className="home">
      <h1>Hello World</h1>
      <h3>Intro to application...maybe a site map</h3>
    </Card>
  );
};

export default Home;
