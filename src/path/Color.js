import { useState , useEffect , useRef} from 'react';
import './Color.css';
import PicItem from '../component/PicItem';
import PicPost from '../component/PicPost';
import picscolor from '../data/picscolor';
import Navbar from '../component/Navbar/Navbar';
import ReactGA from 'react-ga';

function Color() {

    useEffect ( () => {
        ReactGA.initialize('UA-199620324-2');
        ReactGA.pageview('/color');
    }, [])

    const [selectedPic, setselectedPic] = useState(null);
    const [visible, setVisible] = useState(30);
    function loadMore() { setVisible(visible + 30) }

    //Open&Close Function onClick the picture
    function onPicOpenClick(thePic) {
        setselectedPic(thePic);
    }
    function onPicCloseClick() {
        setselectedPic(null);
    }

    //PicItem
    const picElements = picscolor.slice(0, visible).map((pic, index) => {
        return <PicItem key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });

    //PicPost
    let picPost = null;
    if (!!selectedPic) {
        picPost = <PicPost pic={selectedPic} onBgClick={onPicCloseClick} page={"color"} type={"color"}/>
    }

    return (
        <div className="App">
            <Navbar/>

            <div className="head-topic">
                <h4>C O L O R F U L</h4>
                <p>งานลงสีคัลเล่อฟูล (Color & Painting)</p>
            </div>
            <br/>

            <div className="app-grid">
                {picElements}
            </div>
            {picPost}

            <br/>

            {visible < picscolor.length &&
                <div className="loadmore">
                    <btn type='button' onClick={() => loadMore()}> 
                        <span>Load More </span>
                    </btn>
                </div>
            }

        </div>
    );
}

export default Color;
