import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({items}) {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <li className={css.item} key={item.id}>
                    <ImageCard link={item.urls.small} desc={item.description} />
                </li>
            ))
           }
        </ul>
    )
    
}