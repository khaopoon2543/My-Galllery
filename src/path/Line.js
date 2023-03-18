import { useState , useEffect , useRef} from 'react';
import './Color.css';
import PicItem from '../component/PicItem';
import PicPost from '../component/PicPost';
import picsline from '../data/picsline';
import Navbar from '../component/Navbar/Navbar';
import ReactGA from 'react-ga';

function Line() {

    useEffect ( () => {
        ReactGA.initialize('UA-199620324-2');
        ReactGA.pageview('/line');
    }, [])

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
        picPost = <PicPost pic={selectedPic} onBgClick={onPicCloseClick} page={"line"} type={"line"}/>
    }


    return (
        <div className="App">
            <Navbar/>
            
            <div className="head-topic">
                <h4>S K E T C H</h4>
                <p>งานรัฟงานเส้นอย่างคูล (Black White & Flat Color)</p>
            </div>
            <br/>

            <div className="app-grid">
                {picElements}
            </div>
            {picPost}

            <br/><br/><br/>

        </div>
    );
}

export default Line;
