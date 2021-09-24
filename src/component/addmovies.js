import React, {useState, useContext} from "react";
import { MovieContext } from "./MovieContext";
import "./style.css";
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const AddMovies = () => {
     const [name, setName] = useState(' ');
     const [price, setPrice] = useState(0);
     const [movies, setMovies] = useContext(MovieContext);


      const updateName = (event) => {
             setName(event.target.value);
      };

      const updatePrice = (event) => {
          setPrice(event.target.value);
      };

      const handleSubmit = (event) => {
          event.preventDefault();
          console.log("form submit");
          setMovies(prevMovies => [...prevMovies, {name: name, price: price}])


      }

      return(
              <Container>
                  <Form onSubmit = {handleSubmit}>
                      <Row form>
                          <Col md={6}>
                          <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Enter Movie Name" onChange={updateName}/>
                         </FormGroup>
                          </Col>

                          <Col md={6}>
                          <FormGroup>
                            <Label for="price">Price</Label>
                            <Input type="number" name="price" id="price" placeholder="Enter Price" onChange={updatePrice}/>
                         </FormGroup>
                          </Col>

                      </Row>
                      <Button> Submit </Button>
                  </Form>
              {/* <Row>
                  <Col xs="6">
                  <div className="form-div">
                  <form onSubmit = {handleSubmit}>
                  <input type="text" name="movie" onChange={updateName}/>
                  <input type="number" name="price" onChange={updatePrice}/>
                  <button> Submit</button>
                  </form>
                 </div>
                  </Col>
              </Row> */}
             
             
              </Container>
            
            
      )
}

export default AddMovies