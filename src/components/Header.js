//This the header that will be displayed on several pages.  It is a functional component that is imported into the pages that need it.

import React from "react";
import { Navbar, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import moment from "moment";
import logo1 from "../images/logo1.png";
import Image from "react-bootstrap/Image";
import BockscarPatch from "../images/BockscarPatch.png";

//The header will display todays date and time.  It will also display the logo for the application.  The logo will be a link to the home page.  The header will also display the navigation links to the other pages in the application.

const Header = () => {
  const date = moment().format("MMMM Do YYYY, h:mm a");
  return (
    <Card className="header">
      <Navbar bg="dark" variant="dark">
        <Card>
          <Image src={logo1} roundedCircle height={60} width={60} />
        </Card>
        <Card className="bockscarPatch">
          <Image src={BockscarPatch} roundedCircle height={60} width={60} />
        </Card>
        <Card className="date">{date}</Card>
      </Navbar>
    </Card>
  );
};

export default Header;
