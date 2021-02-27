import { useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import PicItemCMS from '../component/PicItemCMS';
import PicPost from '../component/PicPost';
import picsheadshot from '../data/picsComHS';
import picsbustup from '../data/picsComBU';
import picshalfbody from '../data/picsComHB';
import picslines from '../data/picsComLINE';

import './Commission.css';

function Commission() {
    const [selectedPic, setselectedPic] = useState(null);

    function onPicOpenClick(thePic) {
        setselectedPic(thePic);
    }

    function onPicCloseClick() {
        setselectedPic(null);
    }

    const picElementsLINE = picslines.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });
    const picElementsHS = picsheadshot.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });
    const picElementsBU = picsbustup.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });
    const picElementsHB = picshalfbody.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });


    let picPost = null;
    if (!!selectedPic) {
        picPost = <PicPost pic={selectedPic} onBgClick={onPicCloseClick}/>
    }

    return (
        <div className="App">
            <Navbar/>

            <div className="status">
                <h4><i class="far fa-star"></i> COMMISSION <i class="far fa-star"></i></h4>
                <br/>
                <p>LINE</p>
            </div>     

            <div className="inform">
                <h6>Headshort : 250++</h6>
                <h6>Bust Up : 300++</h6>
                <h6>Half Body : 350++</h6>
                <h6>Full Body : 450++</h6>
            </div>
            <div className="informdescription">
                <p>มีสองแบบให้เลือกค่า (ซ้าย) แบบเส้นดินสอ (ขวา) เส้นคมนิดหน่อย เราจะถมดำให้ตามภาพเลยค่า แต่ถ้าไม่เอาก็บอกได้นะคะ</p>
                
            </div>

            <div className="app-grid">
                {picElementsLINE}
            </div>

            <br/>
           
            <div className="status">
                <p>COLOR</p>
            </div> 
            <div className="inform">
                <h6>Headshot : 600++</h6>
            </div>
            <div className="app-grid">
                {picElementsHS}
            </div>

            <div className="inform">
                <h6>Bust Up : 700++</h6>
            </div>
            <div className="app-grid">
                {picElementsBU}
            </div>

            <div className="inform">
                <h6>Half Body : 800++</h6>
            </div>
            <div className="app-grid">
                {picElementsHB}
            </div>

            {picPost}
            <br/>

            <div className="statusth">
                <p>รายละเอียดเพิ่มเติม</p>
            </div> 
            <div className="description">
                <p>*สามารถดูงานเราแล้วบอกก็ได้ว่าอยากได้ประมาณไหนได้เลยค่า</p>
                <p>*ลงสีพื้นหลังแบบตัวอย่างให้ฟรีค่า</p>
                <p>*ไฟล์ภาพ 2048*2048 px (จะปรับตามความเหมาะสมของภาพค่า)</p>
                <p>*เราจะส่งให้ทั้งหมด 2 ไฟล์นะคะ คือ JPG และ PNG ค่า</p>
                <br/>
                <p>☆ขั้นตอนการทำงาน☆</p>
                <p>บรีฟงาน ตกลงราคา - โอนเงินครึ่ง/เต็มจำนวน - ร่างภาพ(ส่งให้ดู) - ตัดเส้น ลงสี(ส่งให้ดู) - ส่งงานทางอีเมล</p>
                <br/>
                <p>*ถ้ารายละเอียดเยอะขอเพิ่มราคาตามความเหมาะสมนะคะ(^-^;</p>
                <p>*สามารถแก้ได้ทั้งหมด 3 ครั้งค่า (หลังจากนี้จะขอเพิ่มครั้งละ 50 นะคะ แต่ถ้าเราเข้าใจบรีฟผิดเองเราไม่เก็บค่า)</p>
                <br/>
                <div className="chat">
                    <p>*เพิ่มตัวละครคิดราคา 80% จากราคาสเกลนั้นๆค่า</p>
                    <p>*ราคานี้ไม่ใช้สำหรับเชิงพาณิชย์นะคะ (สำหรับเชิงพาณิชย์ราคาจะ*2 จากราคาเดิมค่า)</p>
                    <p>*ระยะเวลาทำงาน : ประมาณ 3 วัน - 1 อาทิตย์</p>
                    <p>*ธนาคารกสิกรไทย TrueWallet(+15)</p>
                </div>
                <br/>
                <p>มีอะไรอยากสอบถามเพิ่มเติมถามได้เลยนะคะ(^○^)</p>
            </div>

            <div className="contact">
                    <a href="https://twitter.com/kaopuny"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/mikokpy35"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/mikomaki35"><i class="fab fa-instagram"></i></a>
            </div>
            
            <br/><br/><br/>


        </div>
    );
}

export default Commission;
