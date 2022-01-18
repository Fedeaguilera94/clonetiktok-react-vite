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
    albumCover:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b438a3b2c487261328517e5f98b6db32~c5_720x720.jpeg?x-expires=1642604400&x-signature=WK1Iji3uylxdseMqEQN%2BSAtkXUs%3D",

    src: "https://v16-webapp.tiktok.com/ebdef1fa30147fb5d8087867c418bf86/61e75997/video/tos/useast2a/tos-useast2a-ve-0068c003/7b0ddea709154e50a951685d81ced97e/?a=1988&br=2750&bt=1375&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThP33ylXq&l=20220118182053010223016097144496C1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpscTg6ZnRzOTMzNzczM0ApaGhpZDk2NGQ4NzQ0M2k1O2dnNm5icjRfbjFgLS1kMTZzczBeMzVgXjRiLl9eY2E2XjE6Yw%3D%3D&vl=&vr=",
  },
  {
    id: 2,
    author: "joaquinmontechiano",
    description: "Las bolsita ziploc para tener en cuenta 🤟🏼#",
    likes: 123,
    shares: 234,
    commets: 33,
    songTitle: "sonidoOriginal valentinvalverde12",
    albumCover:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b438a3b2c487261328517e5f98b6db32~c5_720x720.jpeg?x-expires=1642604400&x-signature=WK1Iji3uylxdseMqEQN%2BSAtkXUs%3D",
    src: "https://v16-webapp.tiktok.com/a1e0fd1f0ed7ed306254525e1b0f407a/61e75980/video/tos/useast2a/tos-useast2a-pve-0068/54ae607338ed4b96881b2f5e15d36d5c/?a=1988&br=6220&bt=3110&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3W_nz7ThP33ylXq&l=20220118182053010223016097144496C1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhycDs6ZnA6OTMzNzczM0ApZDU5NDw5OmUzN2VpNDNlNWcyczVhcjRvaGVgLS1kMTZzc2E0MTVfYmBjNjQzYWJhMzA6Yw%3D%3D&vl=&vr=",
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
