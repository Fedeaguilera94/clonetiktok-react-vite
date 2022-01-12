import VideoPlayer from "../VideoPlayer/index ";
import styles from "./styles.module.css";
const VIDEOS = [
  {
    id: 1,
    author: "valentinvalverde12",
    description: "El finall, La hipocrecia. ",
    likes: 123,
    shares: 234,
    commets: 33,
    songTitle: "sonidoOriginal valentinvalverde12",
    albumCover: "",

    src: "https://v16-webapp.tiktok.com/ff7baa9473f56c31e5469e5256fa22bd/61de9575/video/tos/useast2a/tos-useast2a-pve-0068/a646ee2986894fc8b07647092598c0c0/?a=1988&br=1808&bt=904&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=202201120246290101921611680475FCFE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anRvNmk6ZjRrOjMzNzczM0ApaWg8NWdlNzs4Nzk0NGg3aWdtczVrcjRvXy9gLS1kMTZzczVhYS81YTAyYV5fYTQxLjY6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 2,
    author: "joaquinmontechiano",
    description: "Las bolsita ziploc para tener en cuenta 🤟🏼#",
    likes: 123,
    shares: 234,
    commets: 33,
    songTitle: "sonidoOriginal valentinvalverde12",
    albumCover: "",
    src: "https://v16-webapp.tiktok.com/83a73f23682a29be6c54468379081b23/61de9575/video/tos/useast2a/tos-useast2a-ve-0068c003/bf353afbf78b4f268edbd89f30121cc0/?a=1988&br=4426&bt=2213&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=202201120246290101921611680475FCFE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3l4cGc6ZmozOjMzNzczM0ApPDVkZDgzPDs6N2Q5ZjU2PGcxMmJjcjRvamFgLS1kMTZzczMxMTUtYGA1X181NjEuMjI6Yw%3D%3D&vl=&vr=",
  },
];

export default function FeedVideos() {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    );
  });
}
