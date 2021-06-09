import { useState , useEffect , useRef} from 'react';
import './Color.css';
import PicItem from '../component/PicItem';
import PicPost from '../component/PicPost';
import picscolor from '../data/picscolor';
import Navbar from '../component/Navbar/Navbar';

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

    const [postToShow, setpostToShow] = useState(null);

    const postsPerPage = 12
    let arrayForHoldingPosts = []
    const ref = useRef(postsPerPage)
    const loopWithSlice = (start, end) => {
        const slicedPosts = picElements.slice(start, end)
        arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
        setpostToShow(arrayForHoldingPosts)
    }
    useEffect(() => {
        loopWithSlice(0, postsPerPage)
    }, [])

    const handleShowMorePosts = () => {
        loopWithSlice(ref, ref.current + postsPerPage)
        ref.current += postsPerPage
    }

    return (
        <div className="App">
            <Navbar/>

            <br/>
            <div className="head-topic">
                <h4>C O L O R F U L</h4>
                <p>งานลงสีคัลเล่อฟูล</p>
            </div>
            <br/>

            <div className="app-grid">
                {postToShow}
            </div>
            {picPost}

            <br/>

            <div className="center">
                <button onClick={handleShowMorePosts}>Load More</button>
            </div>

            <br/><br/><br/>

        </div>
    );
}

export default Color;
