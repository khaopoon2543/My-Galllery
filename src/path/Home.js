import Navbar from '../component/Navbar/Navbar';
import './Home.css';
import React , {useEffect} from 'react';
import ReactGA from 'react-ga';

function Home() {

    useEffect ( () => {
        ReactGA.initialize('UA-199620324-2');
        ReactGA.pageview('/home');
    }, [])

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
                <p><i class="fas fa-quote-left"></i> สวัสดีคับ เราข้าวปุ้นเอ้ง <i class="fas fa-quote-right"></i></p>
                <p>นี่เว็บเก็บคลังงานของเราเอง วาดเล่นบ้างจริงจังบ้างไปเรื่อยคับ ลงงานอยู่ในทวิตบ่อยสุด ยังไงก็ขอฝากงานเราไว้ในใจทุกคนด้วยนะค้าบ <i class="far fa-laugh-wink"></i></p>
                <br/><br/>
                <div className="contact">
                    <a href="https://twitter.com/kaopuny"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/mikokpy35"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100005184785636"><i class="fab fa-facebook-messenger"></i></a>
                </div>
            </div>
            <br/><br/><br/>
            
        </div>
    );
}

export default Home;
