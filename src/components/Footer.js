//The footer will display the name of the application and the name of the developer.  It will also display the date the application was created.

import React from "react";
import { Card } from "react-bootstrap";

//This is the footer for the application.  It is a functional component that is imported into the pages that need it.

const Footer = () => {
     return (
     <Card className="footer">
          <h3>Created by: David H. Smith</h3>
          <h3>Application: Bockscar</h3>
     </Card>
     );
     }

export default Footer;