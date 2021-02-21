import { useState } from 'react';
import './Home.css';

function Home() {
    

    return (
        <div className="App">

            <div className="center">
                <img src="../home/me.jpg" alt="Avatar"/>
            </div>

            <div className="about-me">
                <h4>Kaopuny</h4>
                <p>สวัสดีคับข้าวปุ้นเอ้ง</p>
                <p>นี่เว็บเก็บคลังงานของเราเอง วาดเล่นบ้างจริงจังบ้างไปเรื่อยคับ ลงงานอยู่ในทวิตบ่อยสุด มาคุยกันได้นะค้าบ <i class="far fa-laugh-wink"></i></p>
                <div className="contact">
                    <a href="https://twitter.com/kaopuny"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/mikokpy35"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/mikomaki35"><i class="fab fa-instagram"></i></a>
                </div>

            </div>

           

        </div>
    );
}

export default Home;
