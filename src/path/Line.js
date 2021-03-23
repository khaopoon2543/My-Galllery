import { useState } from 'react';
import './Color.css';
import PicItem from '../component/PicItem';
import PicPost from '../component/PicPost';
import picsline from '../data/picsline';
import Navbar from '../component/Navbar/Navbar';

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
            <Navbar/>
            
            <br/>
            <div className="head-topic">
                <h4>L I N E   A R T S</h4>
                <p>งานรัฟงานเส้นอย่างคูล</p>
            </div>
            <br/>

            <div className="app-grid">
                {picElements}
            </div>
            {picPost}

            <br/>
            <div className="credit">
                <h5>@kaopuny</h5>
            </div>
            <br/><br/><br/>

        </div>
    );
}

export default Line;
