import React, { useState} from "react";
import { Row, Col, Container } from "reactstrap";
import "./style.css";


const Movies = ({key, name}) => {

    return (
        <Container>
             {/* <Row>
                  <Col md={6}> */}
                  <div id={key} style={{backgroundColor: "black;"}}  >{name}</div>
                  {/* </Col>
              </Row> */}
               

        </Container>
             
       
    )
}

export default Movies;