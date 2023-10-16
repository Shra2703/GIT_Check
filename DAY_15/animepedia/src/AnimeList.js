import { Component } from "react";
import Animecard from "./Animecard";

class AnimeList extends Component {
  constructor() {
    super();

    // list of all animes
    this.state = {
      animeList: [
        {
          animeName: "Naruto",
          animeImg:
            "https://wallpapers.com/images/featured/anime-naruto-pictures-mg0inlcvuxq3z7j3.jpg",
          about:
            "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
          isAbout: false,
        },
        {
          animeName: "One Piece",
          animeImg:
            "https://qph.cf2.quoracdn.net/main-qimg-3990fa983da48a0f5a59933d9ddb528f-pjlq",
          about:
            "The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as the One Piece in order to become the next King of the Pirates.",
          isAbout: false,
        },
        {
          animeName: "Demon Slayer",
          animeImg:
            "https://cdn.oneesports.gg/cdn-data/2023/01/Anime_DemonSlayer_AllHashira_2-1024x576.jpg",
          about:
            "Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
          isAbout: false,
        },
        {
          animeName: "Dragon balls",
          animeImg:
            "https://cdn.oneesports.gg/cdn-data/2023/01/Anime_DemonSlayer_AllHashira_2-1024x576.jpg",
          about:
            "Dragon Ball tells the tale of a young warrior by the name of Son Goku, a young peculiar boy with a tail who embarks on a quest to become stronger and learns of the Dragon Balls, when, once all 7 are gathered, grant any wish of choice.",
          isAbout: false,
        },
        {
          animeName: "Bleach",
          animeImg:
            "https://staticg.sportskeeda.com/editor/2023/01/3f367-16729468481724.webp",
          about:
            "Ichigo Kurosaki is a teenager from Karakura Town who can see ghosts, a talent allowing him to meet a supernatural human Rukia Kuchiki, who enters the town in search of a Hollow, a kind of monstrous lost soul who can harm both ghosts and humans.",
          isAbout: false,
        },
      ],
    };
  }

  //   button clicked for about section
  handleClick = (animeSeries) => {
    const { animeList } = this.state;
    const aid = animeList.indexOf(animeSeries);
    animeList[aid].isAbout = !animeList[aid].isAbout;

    this.setState({
      animeList: animeList,
    });
  };

  //   render() method
  render() {
    const { animeList } = this.state;
    console.log(animeList);
    return (
      <>
        <h1>AnimePedia</h1>

        <div className="main">
          {animeList.map((anime) => (
            <Animecard animeSeries={anime} handleClick={this.handleClick} />
          ))}
        </div>
      </>
    );
  }
}

export default AnimeList;
