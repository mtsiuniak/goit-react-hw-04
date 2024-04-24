import css from "./ImageCard.module.css";

export default function ImageCard({
  item: {
    alt_description,
    urls: { small, regular },
  },
  onImgClick,
}) {
    return <div className={css.imageDiv}>
  <img className={css.image} src={small} alt={alt_description} onClick={() => onImgClick(regular)}/>
</div>
}