import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
const SRC =
  "https://v16-webapp.tiktok.com/4ce3a6401302132ce5b36ea61355c191/61dbe6d5/video/tos/useast2a/tos-useast2a-ve-0068c003/0a316d5fd09b4298b45cae0bc69ffcc7/?a=1988&br=2120&bt=1060&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FIrkag3-I&l=202201100156520101920531301CA102D5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzc3Ozw6ZmlyOTMzNzczM0ApZDhmaGg3aTs5NzpmOmY5Z2dnbC40cjRfcWRgLS1kMTZzczFiM142MTUuXjBfMWA2LWA6Yw%3D%3D&vl=&vr";
export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);

  const handlePlay = () => {
    if (playing) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setPlaying(!playing);
  };

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerClassName} onClick={handlePlay} />
    </div>
  );
}
