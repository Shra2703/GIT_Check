import {Component} from "react";
import Moviecard from "./Moviecard";


class MovieList extends Component {
    render(){
        return(
            <>
                <Moviecard />
                <Moviecard />
                <Moviecard />
                <Moviecard />
            </>
        )
    }
};

export default MovieList;