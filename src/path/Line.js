import { useState } from 'react';
import './Color.css';
import PicItem from '../component/PicItem';
import PicPost from '../component/PicPost';
import picsline from '../data/picsline';

function Line() {
    const [selectedPic, setselectedPic] = useState(null);

    function onPicOpenClick(thePic) {
        setselectedPic(thePic);
    }

    function onPicCloseClick() {
        setselectedPic(null);
    }

    const picElements = picsline.map((pic, index) => {
        return <PicItem key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });

    let picPost = null;
    if (!!selectedPic) {
        picPost = <PicPost pic={selectedPic} onBgClick={onPicCloseClick}/>
    }

    return (
        <div className="App">

            <div className="head-topic">
                <h4>LINE ARTS</h4>
                <p>งานรัฟงานเส้นอย่างคูล</p>
            </div>

            <div className="app-grid">
                {picElements}
            </div>
            {picPost}

        </div>
    );
}

export default Line;
