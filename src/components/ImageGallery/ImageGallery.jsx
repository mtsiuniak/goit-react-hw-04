import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({items, onImgClick }) {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <li className={css.item} key={item.id}>
                    <ImageCard onImgClick={onImgClick} item={item} />
                </li>
            ))
           }
        </ul>
    )
    
}