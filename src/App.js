import MovieList from "./component/movielist";
import { MovieProvider} from "./component/MovieContext";
import AddMovies  from "./component/addmovies";

function App() {
  return (
    <MovieProvider>
        <div className="App">
        <AddMovies />
        <MovieList />
       
        </div>
    </MovieProvider>
 
  );
}

export default App;
