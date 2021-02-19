import './PicPost.css';

function PicPost(props) {
    const { pic, onBgClick } = props;
    return (
        <div className="pic-post">
            <div className="pic-post-bg" onClick={onBgClick}/>
            <div className="pic-post-content">
                <img src={pic.thumbnailURL}/>
                <h4>{pic.title}</h4>
            </div>
        </div>
    );
}

export default PicPost;