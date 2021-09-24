import React, { useState, useContext} from "react";
import Movies from "./movie"
import { MovieContext } from "./MovieContext";
import { Container, Row, Col} from "reactstrap";


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

   return(
    <div>
         {
              movies.map(i => {
                console.log(i.name);
                return <Container >
                    <Row>
                         <Col xs={6}>
                         <Movies  key={i.id} name={i.name}/>
                         </Col>
                    </Row>

                   
                    </Container>
             })
         }
    </div>
)
}


  

export default MovieList