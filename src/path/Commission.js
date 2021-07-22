import { useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import PicItemCMS from '../component/PicItemCMS';
import PicPost from '../component/PicPost';
import picscolor from '../data/picsComCOLOR';
import picsScale from '../data/picsScale';
import picslines from '../data/picsComLINE';
import picspainting from '../data/picsComPAINTING';
import React , {useEffect} from 'react';
import ReactGA from 'react-ga';

import './Commission.css';

function Commission() {

    useEffect ( () => {
        ReactGA.initialize('UA-199620324-2');
        ReactGA.pageview('/commission');
    }, [])

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
    const picElementsCOLOR = picscolor.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });
    const picElementsScale = picsScale.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });
    const picElementsPAINTING = picspainting.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
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
                <h4>C O M M I S S I O N</h4>
                <p>คอมมิชชั่น</p>
            </div>     

            <br/>

            <div className="table_edit">
                <div className="table">
                    <table>
                        <tr className="head">
                            <th>SCALE</th>
                            <th>SKETCH</th>
                            <th>COLOR</th>
                            <th>PAINTING</th>
                        </tr>
                        <tr>
                            <td>Bust-Up</td>
                            <td>350</td>
                            <td>600</td>
                            <td>800</td>
                        </tr>
                        <tr>
                            <td>Half Body</td>
                            <td>400</td>
                            <td>700</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Knee-Up</td>
                            <td>500</td>
                            <td>800</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Full Body</td>
                            <td>600</td>
                            <td>900</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
                <div className="text_bottom_table">
                    <p><i class="fas fa-star-of-life"></i> ราคานี้เป็นราคาสำหรับ Personal use only (Commercial use x2)</p>
                    <p><i class="fas fa-star-of-life"></i> เพิ่มตัวละครคิดราคา 90% จากราคาสเกลนั้น ๆ ค่า</p>
                    <p><i class="fas fa-star-of-life"></i> ราคานี้เป็นราคาเริ่มต้น ถ้ารายละเอียดเยอะเราขอเพิ่มราคาตามความเหมาะสมนะคะ</p>
                    <p><i class="fas fa-star-of-life"></i> ลงสีพื้นหลังแบบตัวอย่างหรือแบบง่าย ๆ ให้ฟรีค่า</p>

                </div><br/>
            </div>

            <div className="pic_scale">
                {picElementsScale}
            </div><br/>

            <br/><hr class="dashed"></hr><br/>

            <div className="linecolor">
                <p>SKETCH</p>
            </div>    
            <div className="informdescription">
                <p>เป็นเส้นแบบรัฟ ๆ แต่จะเก็บเส้นให้เรียบร้อยไม่รกตาแน่นอนค่ะ! แล้วก็ถมดำหรือลงสีพื้นง่าย ๆ ให้ค่า</p> 
                <p>(ถมดำให้ฟรีค่า แต่ถ้าเป็นลงสีพื้นจะบวกเพิ่ม 50-100 บาทตามรายละเอียดนะคะ)</p>  
            </div>
            <div className="app-grid" id="cms-six">
                {picElementsLINE}
            </div>

            <br/><hr class="dashed"></hr><br/>

            <div className="linecolor">
                <p>COLOR</p>
            </div> 
            <div className="informdescription">
                <p>เป็นเส้นแบบ Sketch เพิ่มเติมคือลงสี ลงเงา สาดแสงและเก็บลายละเอียดบางส่วนให้ภาพดูดีดูปังค่า</p>
            </div><br/>
            <div className="app-grid" id="cms-six">
                {picElementsCOLOR}
            </div>

            <br/><hr class="dashed"></hr><br/>


            <div className="linecolor">
                <p>PAINTING</p>
            </div> 
            <div className="informdescription">
                <p>เพิ่มเติมจาก Color คือจะทับเส้น เก็บเส้น เก็บลายละเอียดทุกอย่างให้อย่างเรียบร้อยสวยงามเลยค่า</p>
            </div><br/>
            <div className="app-grid" id="cms-six">
                {picElementsPAINTING}
            </div><br/>

            {picPost}

            <br/><hr class="dashed"></hr><br/>

            <div className="etc" id="candoit">
                <div className="etc_topic">
                    <h1>CAN & CAN'T</h1>
                </div>
                <br/>
                <div className="white candoit border-right">
                    <p><i class="fas fa-check"></i> Original Characters</p>
                    <p><i class="fas fa-check"></i> Fanarts</p>
                    <p><i class="fas fa-check"></i> NL / BL / GL</p>
                    <p><i class="fas fa-star-of-life"></i> ทักมาสอบถามเพิ่มเติมก่อนได้เลยค่า</p>
                    <br/>
                </div> 
                <div className="red candoit">
                    <p><i class="fas fa-times"></i> R-18 / Gore</p>
                    <p><i class="fas fa-times"></i> Robot / Furry / Muscle</p>
                    <p><i class="fas fa-times"></i> Realistic </p>
                    <p><i class="fas fa-times"></i> Elderly People </p>
                    <p><i class="fas fa-times"></i> Perspective BG</p>
                </div>
                         
            </div>

            <div className="etc" id="process">
                <div className="etc_topic" id="process">
                    <h1>WORKING PROCESS</h1>
                </div>
                <div className="process-grid">
                    <div className="process"> 
                        <i class="fas fa-list-alt"></i> 
                        <p>1.บรีฟงาน</p>
                        <h4>ติดต่อเรามาทาง IB หรือ DM แจ้ง <h4 id="underline">Scale/ Type/ รายละเอียด อารมณ์ ท่าทางของตัวละคร/ โทนสีภาพ/ etc</h4> มาได้เลยค่า
                        <h4 id="underline"> ในส่วนของการบรีฟท่าทางของตัวละคร รบกวนไม่นำงานของนักวาดท่านอื่นมาบรีฟนะคะ </h4> อาจจะเขียนอธิบายหรือวาดเป็นน้องก้างปลามาก็ได้ค่า</h4>
                    </div>
                    
                    <div className="process"> 
                        <i class="fas fa-comment-dollar"></i> 
                        <p>2.ชำระเงิน</p>
                        <h4>เมื่อตกลงราคากันเรียบร้อยแล้วก็ชำระเงินได้เลยค่ะ <h4 id="underline">จะเลือกจ่ายมัดจำก่อน 50% หรือจะจ่ายราคาเต็มเลยก็ได้ค่า</h4></h4>
                    </div>

                    <div className="process"> 
                        <i class="fas fa-pencil-alt"></i> 
                        <p>3.ร่างภาพ</p>
                        <h4>เมื่อชำระเงินและถึงคิวลูกค้าแล้ว <h4 id="underline">เราจะร่างภาพตามบรีฟแล้วจะส่งให้ตรวจดูค่า</h4> สำหรับ Sketch เมื่อลูกค้าพอใจแล้วเราก็จะส่งงานให้เลยค่า</h4>
                    </div>

                    <div className="process"> 
                        <i class="fas fa-palette"></i> 
                        <p>4.ลงสี</p>
                        <h4>เมื่อภาพร่างผ่านแล้ว <h4 id="underline">เราจะลงสีคร่าว ๆ แล้วส่งให้ตรวจดูค่า</h4> เมื่อลูกค้าพอใจแล้ว สำหรับ Color เราก็จะส่งงานให้เลย ส่วน Painting ก็จะเริ่มทับเส้นเก็บงานเลยค่า</h4>
                    </div>

                    <div className="process"> 
                        <i class="fas fa-paper-plane"></i> 
                        <p>5.ส่งงาน</p>
                        <h4>เมื่อเราเก็บงานเสร็จแล้ว <h4 id="underline">เราจะส่งภาพที่เสร็จแล้วให้ตรวจดูค่า</h4> จากนั้นถ้าลูกค้าพอใจกับงานเรียบร้อยแล้ว และสำหรับผู้ที่จ่ายมัดจำก่อนเมื่อจ่ายอีกครึ่งครบแล้ว เราก็จะส่งงานผ่านทาง E-mail ให้เลยค่า</h4>
                    </div>
                </div>
            </div>

            <div className="etc">
                <div className="etc_topic">
                    <h1>TERMS OF SERVICE</h1>
                </div>
                <br/>
                <div className="red">
                    <p><i class="fas fa-star-of-life"></i> ขอไม่รับงานเร่งนะคะ รันคิวตามลำดับการบรีฟค่า</p>
                    <p><i class="fas fa-star-of-life"></i> Sketch แก้ได้ทั้งหมด 3 ครั้ง / Color & Painting แก้ได้ทั้งหมด 5 ครั้ง นอกจากนี้จะเก็บเพิ่มครั้งละ 50 บาท แต่ถ้าเราวาดไม่ตรงบรีฟเองหรือแก้เล็ก ๆ น้อย ๆ เราไม่นับค่า</p>
                    <p><i class="fas fa-star-of-life"></i> ในส่วนของการลงสีเราไม่ค่อยถนัดลงสีโทนมืดเท่าไรนะคะ จะถนัดโทนอบอุ่นสว่าง ๆ มากกว่าค่า</p>  
                    <p><i class="fas fa-star-of-life"></i> ลายเส้นเราอาจมีการเปลี่ยนแปลงไปตามเวลา ดังนั้นขอให้ยึดลายเส้นช่วงปัจจุบันของเราเป็นหลักนะคะ</p> 
                    <p><i class="fas fa-star-of-life"></i> งานที่เสร็จเรียบร้อยแล้วเราจะนำไปเผยแพร่ลงใน FB/TW ของเรานะคะ (โดยใส่ลายน้ำให้ค่า) แต่ถ้าหากไม่สะดวกที่จะให้เผยแพร่ก็บอกเราได้เลยนะคะ</p>
                    <br/><hr class="dashed" id="etc"></hr><br/>
                    <p><i class="fas fa-dot-circle"></i> ระยะเวลาทำงาน : ประมาณ 3 วัน - 1 อาทิตย์ (ขึ้นอยู่กับลายละเอียดของงานนะคะ)</p>
                    <p><i class="fas fa-dot-circle"></i> ธนาคารกสิกรไทย / TrueWallet (+15)</p>
                </div>
                <br/><hr class="dashed" id="etc"></hr><br/>
                <p><i class="fas fa-dot-circle"></i> ไฟล์ภาพจะปรับตามความเหมาะสมของภาพนะคะ โดยปกติจะใช้ขนาด 1500*2000px / Resolution 300dpi</p>
                <p><i class="fas fa-dot-circle"></i> แต่ถ้าต้องการขนาดอื่นสามารถบอกขนาดไฟล์ภาพที่ต้องการกับเราก่อนเริ่มงานได้เลยค่า</p>
                <p><i class="fas fa-dot-circle"></i> เราจะส่งให้ทั้งหมด 2 ไฟล์นะคะ คือ JPG และ PNG ค่า</p>
  
                <p><i class="fas fa-dot-circle"></i> สามารถดูงานเราแล้วบอกก็ได้ว่าอยากได้ประมาณแบบภาพไหนได้เลยค่า</p>
                <p><i class="fas fa-dot-circle"></i> สามารถสอบถามเพิ่มเติมได้ทาง IB หรือ DM ได้ตลอดเลยนะคะ (^-^)</p>
                <br/>
            </div>

            <div className="queue">
                <i class="fas fa-chevron-right light"></i>
                <i class="fas fa-chevron-right"></i>
                <a href="/status"> QUEUE & STATUS </a>
                <i class="fas fa-chevron-left"></i>
                <i class="fas fa-chevron-left light"></i>
            </div>
            <br/>
            <div className="contact">
                    <a href="https://twitter.com/kaopuny"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/mikokpy35"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100005184785636"><i class="fab fa-facebook-messenger"></i></a>
            </div>

        </div>
    );
}

export default Commission;
