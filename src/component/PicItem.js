import "./PicItem.css";

function PicItem(props) {
    const { pic, onPicClick } = props;
    return (
        <div className="pic-item">
            <img src={pic.thumbnailURL} onClick={() => {onPicClick(pic)}}/>
            <h4>{pic.title}</h4>
        </div>
    )
}

export default PicItem;