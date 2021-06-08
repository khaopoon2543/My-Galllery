import Navbar from '../component/Navbar/Navbar';
import './Home.css';

function Home() {
    

    return (
        <div className="App">
            <Navbar/>
            <br/>
            <div className="profilepic">
                <img src="../home/me.jpg" alt="Avatar"/>
            </div>
            <br/>
            <div className="about-me">
                <h4>Kaopuny</h4>
                <br/>
                <p>สวัสดีคับข้าวปุ้นเอ้ง</p>
                <p>นี่เว็บเก็บคลังงานของเราเอง วาดเล่นบ้างจริงจังบ้างไปเรื่อยคับ ลงงานอยู่ในทวิตบ่อยสุด มาคุยกันได้นะค้าบ <i class="far fa-laugh-wink"></i></p>
                <br/>
                <div className="contact">
                    <a href="https://twitter.com/kaopuny"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/mikokpy35"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
            <br/><br/><br/>
            
        </div>
    );
}

export default Home;
