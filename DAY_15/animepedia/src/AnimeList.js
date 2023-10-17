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
          isChar: false,
          charaters: [
            {
              name: "Naruto",
              chImg:
                "https://i.pinimg.com/236x/96/3d/c4/963dc4970853c4a30b1922cf3f822a13.jpg",
            },
            {
              name: "Itachi Uchiha",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcuJiJ204zj3eD54pI-i8IlGxeGy8rDz0DA1Gyc9x86sz0JUHsKIJVOLNwb9Z1AXBFlw&usqp=CAU",
            },
            {
              name: "Obito Uchiha",
              chImg: "https://pbs.twimg.com/media/FLP0WB-VUA0aqq4.jpg",
            },
            {
              name: "Sasuke Uchiha",
              chImg:
                "https://i.pinimg.com/736x/16/05/67/160567f78bff5801050ef4e7eb483fbb.jpg",
            },
            {
              name: "Kakashi",
              chImg:
                "https://i1.sndcdn.com/avatars-000429490611-okb192-t240x240.jpg",
            },
          ],
        },
        {
          animeName: "One Piece",
          animeImg:
            "https://qph.cf2.quoracdn.net/main-qimg-3990fa983da48a0f5a59933d9ddb528f-pjlq",
          about:
            "The story follows the adventures of Monkey D. Luffy and his crew, the Straw Hat Pirates, where he explores the Grand Line in search of the mythical treasure known as the One Piece in order to become the next King of the Pirates.",
          isAbout: false,
          isChar: false,
          charaters: [
            {
              name: "Nami",
              chImg:
                "https://i.pinimg.com/736x/d5/a2/04/d5a2041f7f8f111d22f04dbadc628015.jpg",
            },
            {
              name: "Monkey D. Luffy",
              chImg:
                "https://i.pinimg.com/736x/76/da/03/76da03c579566626fa270bdb6df1280b.jpg",
            },
            {
              name: "Monkey D. Garp",
              chImg:
                "https://www.hindustantimes.com/ht-img/img/2023/04/17/1600x900/one-piece-garp-marine-admiral_1681773986504_1681773986695.webp",
            },
            {
              name: "Roronoa Zoro",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WVWknP189PldkNoxYIm-UpbDJs6zcQv9rAEAounwRDy8Ruw3Rgn5-Bl4zyq0VXl-o2s&usqp=CAU",
            },
            {
              name: "Nico Robin",
              chImg:
                "https://imgmedia.libero.pe/652x359/libero/original/2023/06/05/647e220df61db11ecb1d7e7a.webp",
            },
          ],
        },
        {
          animeName: "Demon Slayer",
          animeImg:
            "https://cdn.oneesports.gg/cdn-data/2023/01/Anime_DemonSlayer_AllHashira_2-1024x576.jpg",
          about:
            "Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
          isAbout: false,
          isChar: false,
          charaters: [
            {
              name: "Giyu Tomioka",
              chImg:
                "https://preview.redd.it/whats-your-favourite-thing-about-giyu-tomioka-v0-m5burkjiysab1.jpg?width=640&crop=smart&auto=webp&s=1f4548f67e9e890dc79025c4d38ee74a40e40402",
            },
            {
              name: "Kanao Tsuyuri",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6pKR3wjAsQ7c28sHB6usRmDjjg8HYAPE47HMWY_rvT4xf3WB5702OK_gfc7M4XS8RKg&usqp=CAU",
            },
            {
              name: "Kyōjurō Rengoku",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHLfN6yr8ri7IEhWDR6OrkZtrjctU6Sl4wvj7Sa1-cu4rkBzUSj90Kwk-VhsPUDqy83Q&usqp=CAU",
            },
            {
              name: "Tanjiro Kamado",
              chImg:
                "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT8EqMx1tVrCfNlAUnZp6r_lUDlFw-M68bzqRebAfzeKuSo-cNdwQvheORyJ-5wjFP4",
            },
            {
              name: "Nezuko Kamado",
              chImg:
                "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTJhjC_iNEs2cn0GMMhCZFiAUMLYLx25n5gYv9moP4Ek1GUMtgFdsuf8hectFefFhEe",
            },
          ],
        },
        {
          animeName: "Dragon balls",
          animeImg:
            "https://media.comicbook.com/2020/09/dragon-ball-super-ending-z-fighters-team-reunion-1237292.jpeg?auto=webp",
          about:
            "Dragon Ball tells the tale of a young warrior by the name of Son Goku, a young peculiar boy with a tail who embarks on a quest to become stronger and learns of the Dragon Balls, when, once all 7 are gathered, grant any wish of choice.",
          isAbout: false,
          isChar: false,
          charaters: [
            {
              name: "Goku",
              chImg:
                "https://cdnb.artstation.com/p/media_assets/images/images/001/016/635/large/Final_copy.jpg?1667758461",
            },
            {
              name: "Gohan",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti0Mz1VL10lzFf146GLEHHm-eqThL_1VzK1mM2nfExo2Qcak9U_ufhEB4zH7vwekTM1k&usqp=CAU",
            },
            {
              name: "Krillin",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuUEx1tj8nNSEEhvVUd0MmpMuEwW0khQQ6SbVbx3qp0DUKQfc13EFqj1O0zjlD2IybDI&usqp=CAU",
            },
            {
              name: "Vegeta",
              chImg:
                "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQVM9Hutlz6ZmWLHqLhL4efnAMeBQLk5DittFkWD40PYiPkc_7s__5iJP-4K8blbvLA",
            },
            {
              name: "Piccolo",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtnMujLMq00F_qB8vN40oqF6bKY4GOHQBgDuwYpCpGVL5Qma7AAggz9jKGl-mVRzEGYo&usqp=CAU",
            },
          ],
        },
        {
          animeName: "Bleach",
          animeImg:
            "https://staticg.sportskeeda.com/editor/2023/01/3f367-16729468481724.webp",
          about:
            "Ichigo Kurosaki is a teenager from Karakura Town who can see ghosts, a talent allowing him to meet a supernatural human Rukia Kuchiki, who enters the town in search of a Hollow, a kind of monstrous lost soul who can harm both ghosts and humans.",
          isAbout: false,
          isChar: false,
          charaters: [
            {
              name: "Ichigo Kurosaki",
              chImg:
                "https://i.pinimg.com/236x/96/3d/c4/963dc4970853c4a30b1922cf3f822a13.jpg",
            },
            {
              name: "Yoruichi Shihoin",
              chImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1A0pi-X0NujbmuMHn10Vr1uX94XSFxpC_3UHp3yhj0R6rxLG_zxuChvfucqmAF5Xo1c&usqp=CAU",
            },
            {
              name: "Shunsui Kyōraku",
              chImg:
                "https://i.pinimg.com/474x/f5/58/03/f55803056911a6bdaac95896734e4238.jpg",
            },
            {
              name: "Sōsuke Aizen",
              chImg:
                "https://dafunda.com/wp-content/uploads/2022/11/Aizen-Membuat-Rencana-yang-Terstruktur-Dari-Awal-800x800.jpg",
            },
            {
              name: "Kenpachi Zaraki",
              chImg:
                "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Kenpachi_Zaraki.png/220px-Kenpachi_Zaraki.png",
            },
          ],
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

  // function for button clicked fot charachter section
  handleClickChar = (animeSeries) => {
    const { animeList } = this.state;
    const aid = animeList.indexOf(animeSeries);
    animeList[aid].isChar = !animeList[aid].isChar;
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
            <Animecard
              animeSeries={anime}
              handleClick={this.handleClick}
              handleClickChar={this.handleClickChar}
            />
          ))}
        </div>
      </>
    );
  }
}

export default AnimeList;
