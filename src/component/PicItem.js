import "./PicItem.css";
import { FiZoomIn } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PicItem(props) {
    const { pic, onPicClick } = props;
    return (
        <div className="pic-item">
            <LazyLoadImage src={pic.thumbnailURL} onClick={() => {onPicClick(pic)}}/>
            <div className="overlay" onClick={() => {onPicClick(pic)}}><FiZoomIn/></div>
        </div>
    )
}

export default PicItem;