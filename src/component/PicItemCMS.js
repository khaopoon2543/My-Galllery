import "./PicItem.css";

function PicItemCMS(props) {
    const { pic, onPicClick } = props;
    return (
        <div className="pic-item-cms">
            <img src={pic.thumbnailURL} onClick={() => {onPicClick(pic)}}/>
        </div>
    )
}

export default PicItemCMS;