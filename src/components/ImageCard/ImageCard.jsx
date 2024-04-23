import css from "./ImageCard.module.css";

export default function ImageCard({link, desc}) {
    return <div className={css.imageDiv}>
  <img className={css.image} src={link} alt={desc} />
</div>
}