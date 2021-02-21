import { useState } from 'react';
import './Color.css';
import PicItem from '../component/PicItem';
import PicPost from '../component/PicPost';
import picscolor from '../data/picscolor';

function Color() {
    const [selectedPic, setselectedPic] = useState(null);

    function onPicOpenClick(thePic) {
        setselectedPic(thePic);
    }

    function onPicCloseClick() {
        setselectedPic(null);
    }

    const picElements = picscolor.map((pic, index) => {
        return <PicItem key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });

    let picPost = null;
    if (!!selectedPic) {
        picPost = <PicPost pic={selectedPic} onBgClick={onPicCloseClick}/>
    }

    return (
        <div className="App">

            <div className="head-topic">
                <h4>COLOR ARTS</h4>
                <p>งานลงสีคัลเล่อฟูล</p>
            </div>

            <div className="app-grid">
                {picElements}
            </div>
            {picPost}

        </div>
    );
}

export default Color;
