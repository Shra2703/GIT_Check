import {Component} from "react";

class AnimeList extends Component {
    constructor(){
        super();
        this.state = {
            anime : [
                {
                animeName: "Naruto",
                animeImg:"https://wallpapers.com/images/featured/anime-naruto-pictures-mg0inlcvuxq3z7j3.jpg",
                about:"Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village."
            },
            {
                animeName: "One Piece",
                animeImg:"https://miro.medium.com/v2/resize:fit:1080/0*pw9xsKqnq2dkGT4P",
                about:"The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as the One Piece in order to become the next King of the Pirates."
            },
            {
                animeName: "Demon Slayer",
                animeImg:"https://cdn.oneesports.gg/cdn-data/2023/01/Anime_DemonSlayer_AllHashira_2-1024x576.jpg",
                about:"Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
            },
            {
                animeName: "Dragon balls",
                animeImg:"https://cdn.oneesports.gg/cdn-data/2023/01/Anime_DemonSlayer_AllHashira_2-1024x576.jpg",
                about:"Dragon Ball tells the tale of a young warrior by the name of Son Goku, a young peculiar boy with a tail who embarks on a quest to become stronger and learns of the Dragon Balls, when, once all 7 are gathered, grant any wish of choice."
            }
        ]
        }
    }

    render(){
        return(
            <>

            </>
        )
    }
}

export default AnimeList;