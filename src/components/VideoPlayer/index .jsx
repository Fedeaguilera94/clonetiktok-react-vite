import clsx from "clsx";
import { useRef } from "react";
import styles from "./styles.module.css";
import VideoDescription from "../VideoDescription";
import VideoPlayerActions from "./VideoPlayerActions";
import useIntersectionVideoPlayer from "../../hooks/useIntersectionVideoPlayer";

const options = {
  root: document.querySelector("main"),
  rootMargin: "0px",
  threshold: 0.9,
};

const observer = new window.IntersectionObserver((entries) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      const { target, isIntersecting } = entry;
      target._handleIntersect(isIntersecting);
    });
}, options);

export default function VideoPlayer(props) {
  const video = useRef(null);
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video });

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing,
  });

  const { username, albumCover, description, src, songTitle, avatar } = props;
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src={src}
        loop
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions {...props} />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>
  );
}
