import { Comment } from "../../Icons/Comment";
import { Heart } from "../../Icons/Heart";
import { Share } from "../../Icons/Share";
import styles from "./styles.module.css";

export default function VideoPlayerActions({
  username,
  avatar,
  likes = 12,
  commets = 22,
  shares = 33,
  hearted = false,
}) {
  const handleLike = () => {
    alert("like");
  };
  const handleComment = () => {
    alert("comment");
  };
  const handleShare = () => {
    alert("share");
  };
  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img alt={username} src={avatar} />
        <img src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg" />
      </div>
      <button onClick={handleLike} className={styles.action}>
        <Heart />
        <span title="like">{likes}</span>
      </button>
      <button onClick={handleComment} className={styles.action}>
        <Comment />
        <span title="commets">{commets}</span>
      </button>
      <button onClick={handleShare} className={styles.action}>
        <Share />
        <span title="shares">{shares}</span>
      </button>
    </aside>
  );
}
