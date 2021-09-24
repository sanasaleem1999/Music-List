import { checkPropTypes } from "prop-types";
import React, {useState, createContext} from "react";

export const MovieContext = createContext();

 
export const MovieProvider = (props) => {
    var [movies, setMovies] = useState([
        {
            name: "game of thrones",
            price: 20,
            id: 1
        },
 
        {
            name: "Inception",
            price: 30,
            id: 2
        },
        {
            name: "Harry Potter",
            price: 40,
            id: 3
        }
    ]);
 
    console.log(movies);
    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )

}