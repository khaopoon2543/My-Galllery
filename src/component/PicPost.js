import './PicPost.css';
import { useState } from 'react';
import { VscArrowLeft, VscArrowRight, VscClose } from 'react-icons/vsc';
import { numberPicColor, numberPicLine } from '../data/picNumbers';
import { LazyLoadImage } from "react-lazy-load-image-component";

function PicPost(props) {
    const { pic, onBgClick, page, type } = props;
    const [selectedPic, setSelectedPic] = useState(pic.thumbnailURL);
    const [picNumber, setPicNumber] = useState(Number(pic.thumbnailURL.match(/\d+/)[0]));
    const selectedPageType = page+"/"+type;

    function checkNumberPicPage(page) {
        if (page === "color") {
            return numberPicColor
        } else if (page === "line") {
            return numberPicLine
        } else if (page === "commission" && type !== "scale") {
            return 6
        } return 1
    }

    function onClickBackNextPic(BackOrNext) {
        if (BackOrNext === "back" && picNumber-1 > 0) {
            const backNumber = picNumber - 1
            setPicNumber(backNumber)
            setSelectedPic("../mylovelypics-"+selectedPageType+" (" +  backNumber + ").jpeg" )
        } 
        else if (BackOrNext === "next" && picNumber+1 <= checkNumberPicPage(page)) {
            const nextNumber = picNumber + 1
            setPicNumber(nextNumber)
            setSelectedPic("../mylovelypics-"+selectedPageType+" (" +  nextNumber + ").jpeg" )
        }
    }

    function checkOverSizePic(picNumber) {
        if (picNumber === 73) {
            return "over-size"
        } return ""
    }

    return (
        <div className="pic-post">
            <div className="pic-post-bg" onClick={onBgClick}/>
            <div className="pic-post-content">
                <div className="arrow-btn">
                    <btn id="close" onClick={onBgClick}><VscClose id="btn-icon"/></btn>
                </div>

                {/* <img src={selectedPic} id={checkOverSizePic(picNumber)}/> */}
                <LazyLoadImage src={selectedPic} alt="Image Alt" effect="blur"/>

                <div className="arrow-btn">

                {page === "commission" ?
                <>
                    {picNumber-1 > 0 &&
                        <btn id="next" onClick={() => onClickBackNextPic("back")}><VscArrowLeft id="btn-icon"/></btn>
                    }
                    {picNumber+1 <= checkNumberPicPage(page) &&
                        <btn id="back" onClick={() => onClickBackNextPic("next")}><VscArrowRight id="btn-icon"/></btn>
                    }
                </>
                :
                <>
                    {picNumber+1 <= checkNumberPicPage(page) &&
                        <btn id="next" onClick={() => onClickBackNextPic("next")}><VscArrowLeft id="btn-icon"/></btn>
                    }
                    {picNumber-1 > 0 &&
                        <btn id="back" onClick={() => onClickBackNextPic("back")}><VscArrowRight id="btn-icon"/></btn>
                    }
                </>
                }

                </div>

            </div>
        </div>
    );
}

export default PicPost;