import {Component} from "react";

class Animecard extends Component {
    
    

    render(){
        return(
            <>
                <div className="card">
                    <img src = "https://wallpapers.com/images/featured/anime-naruto-pictures-mg0inlcvuxq3z7j3.jpg" alt ="anime image"/>
                    <div className="footer">
                        <p className="text">Naruto</p>
                        <button>About show</button>
                    </div>

                </div>
            </>
        )
    }
}

export default Animecard;