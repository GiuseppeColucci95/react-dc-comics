
import styles from './Card.module.css';

export default function Card({ image, title }) {

  return (
    <div className="col-2">
      <div className={styles.card}>
        <div className={styles.img_container}>
          <img src={image} alt={`${title} image`} />
        </div>
        <div className={styles.title}>{title.toUpperCase()}</div>
      </div>
    </div>
  );
}