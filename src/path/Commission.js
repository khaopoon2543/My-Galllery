import { useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import PicItemCMS from '../component/PicItemCMS';
import PicPost from '../component/PicPost';
import picscolor from '../data/picsComCOLOR';
import picsScale from '../data/picsScale';
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
    const picElementsCOLOR = picscolor.map((pic, index) => {
        return <PicItemCMS key={index} pic={pic} onPicClick={onPicOpenClick}/>
    });
    const picElementsScale = picsScale.map((pic, index) => {
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
                        </tr>
                        <tr>
                            <td>Headshot</td>
                            <td>300+</td>
                            <td>550+</td>
                        </tr>
                        <tr>
                            <td>Bust Up</td>
                            <td>350+</td>
                            <td>750+</td>
                        </tr>
                        <tr>
                            <td>Half Body</td>
                            <td>400+</td>
                            <td>950+</td>
                        </tr>
                        <tr>
                            <td>Knee Up</td>
                            <td>500+</td>
                            <td>1050+</td>
                        </tr>
                        <tr>
                            <td>Full Body</td>
                            <td>600+</td>
                            <td>1250+</td>
                        </tr>
                    </table>
                </div>
                <div className="text_bottom_table">
                    <p id="bold"><i class="fas fa-star-of-life"></i> ราคานี้ไม่ใช่สำหรับเชิงพาณิชย์นะคะ เป็นราคาสำหรับ personal use อย่างเดียวค่า</p>
                    <p><i class="fas fa-star-of-life"></i> ถ้ารายละเอียดเยอะจะเพิ่มราคาตามความเหมาะสมนะคะ</p>
                    <p><i class="fas fa-star-of-life"></i> เพิ่มตัวละครคิดราคา 80% จากราคาสเกลนั้น ๆ ค่า</p>
                    <p><i class="fas fa-star-of-life"></i> ลายเส้นเราอาจเปลี่ยนไปตามเวลาดังนั้นขอให้ยึดลายเส้นล่าสุดที่เราโพสเป็นหลักนะคะ</p>
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
                <p>เป็นเส้นแบบรัฟ ๆ นะคะ แต่จะเก็บเส้นให้แล้วก็ถมดำเรียบ ๆ ให้ค่า แต่ถ้าต้องการลงแสงเงาเพิ่มเติมแบบในรูป 3 & 4 บวกเพิ่ม 50 นะคะ</p>   
            </div>

            <div className="app-grid comission">
                {picElementsLINE}
            </div>

            <br/><hr class="dashed"></hr><br/>

           
            <div className="linecolor">
                <p>COLOR</p>
            </div> 

            <div className="informdescription">
                <p>ลงสีแบบทับเส้น จะเก็บเส้นและสาดสีให้ค่า อยากได้โทนสีแบบไหนหรืออยากได้สไตล์แบบไหนก็บอกได้เลยค่า</p>  
            </div>

            <br/>
           
            <div className="app-grid comission">
                {picElementsCOLOR}
            </div><br/>

            {picPost}

            <div className="etc" id="candoit">
                <div className="etc_topic">
                    <h1>CAN & CAN'T</h1>
                </div>
                <br/>
                <div className="white candoit border-right">
                    <p><i class="fas fa-check"></i> Original Characters</p>
                    <p><i class="fas fa-check"></i> Fanarts</p>
                    <p><i class="fas fa-check"></i> NL / BL / GL</p>
                    <p><i class="fas fa-star-of-life"></i> สามารถสอบถามเพิ่มเติมได้</p>
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

            <br/>

            <div className="etc" id="process">
                <div className="etc_topic" id="process">
                    <h1>WORK PROCESS</h1>
                </div>
                <div className="process-grid">
                    <div className="process"> 
                        <i class="fas fa-list-alt"></i> 
                        <p>1.บรีฟงาน</p>
                        <h4>แจ้งสเกลภาพที่ต้องการ รายละเอียดของตัวละครต่าง ๆ ทาง IB หรือ DM 
                        <h4 id="underline"> ในส่วนของการบรีฟท่าทางของตัวละคร ขอรบกวนไม่นำงานของนักวาดท่านอื่นมาบรีฟนะคะ </h4>อาจจะเขียนอธิบายหรือวาดเป็นน้องก้างปลามาก็ได้ค่า
                        </h4>
                    </div>
                    
                    <div className="process"> 
                        <i class="fas fa-comment-dollar"></i> 
                        <p>2.ชำระเงิน</p>
                        <h4>เมื่อตกลงราคากันเรียบร้อยแล้วก็ชำระเงินได้เลยค่ะ <h4 id="underline">ถ้าราคารวมทั้งหมดมากกว่า 800 บาทจ่าย 50% ก่อนได้นะคะ</h4></h4>
                    </div>

                    <div className="process"> 
                        <i class="fas fa-pencil-alt"></i> 
                        <p>3.ร่างภาพ</p>
                        <h4>เมื่อชำระเงินและถึงคิวลูกค้าแล้ว <h4 id="underline">เราจะร่างภาพตามบรีฟแล้วจะส่งให้ตรวจดูค่า</h4> (สำหรับงาน Sketch เมื่อลูกค้าพอใจแล้วเราก็จะส่งงานให้เลยค่า)</h4>
                    </div>

                    <div className="process"> 
                        <i class="fas fa-palette"></i> 
                        <p>4.ลงสี</p>
                        <h4>เมื่อภาพร่างผ่านแล้ว <h4 id="underline">เราจะลงสีคร่าว ๆ แล้วส่งให้ตรวจดูค่า</h4> ถ้าลูกค้าโอเคแล้วเราก็จะเริ่มทับเส้นเก็บงานเลย</h4>
                    </div>

                    <div className="process"> 
                        <i class="fas fa-paper-plane"></i> 
                        <p>5.ส่งงาน</p>
                        <h4>เมื่อเราเก็บงานเสร็จแล้ว <h4 id="underline">เราจะส่งภาพที่เสร็จแล้วให้ตรวจดูค่า</h4> จากนั้นถ้าลูกค้าพอใจกับงานเรียบร้อยแล้ว และสำหรับผู้ที่จ่ายมัดจำก่อนเมื่อจ่ายอีกครึ่งครบแล้ว เราก็จะส่งงานผ่านทาง E-mail หรือ google drive ให้เลยค่า</h4>
                    </div>
                </div>
            </div>

            <br/>

            <div className="etc">
                <div className="etc_topic">
                    <h1>TERMS OF SERVICE</h1>
                </div>
                <br/>
                <div className="red">
                    <p><i class="fas fa-star-of-life"></i> ราคานี้ไม่ใช้อนุญาตให้นำงานไปใช้เชิงพาณิชย์นะคะ ตอนนี้ขอเปิดสำหรับ personal use อย่างเดียวก่อนค่า</p>
                    <p><i class="fas fa-star-of-life"></i> Sketch แก้ได้ 3 ครั้ง Color แก้เพิ่มได้อีก 2 ครั้ง (ในส่วนของการลงสี) นอกจากนี้ขอเก็บเพิ่มครั้งละ 50 นะคะ แต่ถ้าเราวาดไม่ตรงบรีฟเองหรือแก้เล็ก ๆ น้อย ๆ เราไม่นับค่า</p>
                    <p><i class="fas fa-star-of-life"></i> งานที่เสร็จเรียบร้อยแล้วเราจะนำไปเผยแพร่ลงใน FB/TW ของเรานะคะ แต่ถ้าหากไม่สะดวกที่จะให้เผยแพร่ก็บอกเราได้เลยค่า</p>
                    <br/>
                    <p><i class="fas fa-dot-circle"></i> ระยะเวลาทำงาน : ประมาณ 3 วัน - 1 อาทิตย์</p>
                    <p><i class="fas fa-dot-circle"></i> ธนาคารกสิกรไทย / TrueWallet (+15)</p>
                </div>
                <br/>
                <p><i class="fas fa-dot-circle"></i> ไฟล์ภาพจะปรับตามความเหมาะสมของภาพนะคะ โดยปกติจะใช้ขนาด 1500*1500px และ 1500*2000px / Resolution 300dpi</p>
                <p><i class="fas fa-dot-circle"></i> แต่ถ้าต้องการขนาดอื่นสามารถบอกขนาดไฟล์ภาพที่ต้องการกับเราก่อนเริ่มงานได้เลยค่า</p>
                <p><i class="fas fa-dot-circle"></i> ส่งให้ทั้งหมด 2 ไฟล์นะคะ คือ JPG และ PNG ค่า</p>
                <br/>
                <p><i class="fas fa-dot-circle"></i> สามารถดูงานเราแล้วบอกก็ได้ว่าอยากได้ประมาณไหนได้เลยค่า</p>
                <p><i class="fas fa-dot-circle"></i> ลงสีพื้นหลังแบบตัวอย่างหรือแบบง่าย ๆ ให้ฟรีค่า</p>
                <p><i class="fas fa-dot-circle"></i> มีอะไรอยากสอบถามเพิ่มเติมติดต่อมาทาง IB หรือ DM ได้เลยนะคะ (^○^)</p>
                <br/>
            </div>

            <br/><hr class="dashed"></hr><br/>

            <div className="queue">
                <i class="fas fa-chevron-right light"></i>
                <i class="fas fa-chevron-right"></i>
                <a href="https://docs.google.com/spreadsheets/d/1xZ7PbGFoHv0L9RyDI7TWlDJMl6l6vjACCkNOcOppdTI/edit#gid=0">Queue & Status</a>
                <i class="fas fa-chevron-left"></i>
                <i class="fas fa-chevron-left light"></i>
            </div>
            <br/>
            <div className="contact">
                    <a href="https://twitter.com/kaopuny"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/mikokpy35"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100069345495474"><i class="fab fa-facebook-messenger"></i></a>
            </div>

        </div>
    );
}

export default Commission;
