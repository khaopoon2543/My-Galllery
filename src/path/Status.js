import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import Navbar from '../component/Navbar/Navbar';
import './Status.css';
import ReactGA from 'react-ga';

export default function Status() {
  const [data, setData] = useState([]);

  useEffect ( () => {
    ReactGA.initialize('UA-199620324-2');
    ReactGA.pageview('/status');
  }, [])

  useEffect(() => {
    Tabletop.init({
      key: "1xZ7PbGFoHv0L9RyDI7TWlDJMl6l6vjACCkNOcOppdTI",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
        <div className="App">
            <Navbar/>

            <br/>
            <div className="head-topic">
                <h4>Q U E U E - S T A T U S</h4>
                <p>เช็คลำดับคิว & สถานะคอมมิชชั่น</p>
            </div>

            <br/><br/>

            <div className="tableforqueue">
                    <table>
                        <tr className="head">
                            <th>Q</th>
                            <th id="left">NAME</th>
                            <th>DETAIL</th>
                            <th>STATUS</th>
                        </tr>

                        {data.map((item, i) => (
                            <Fragment key={i}>
                                <tr>
                                    <td>{item.QUEUE}</td>
                                    <td id="left">{item.NAME} {item.CONTACT}</td>
                                    <td>
                                        <p id="type">{item.TYPE}</p> 
                                        <p id="scale">{item.SCALE}</p>
                                    </td>
                                    <td><p id="status">{item.STATUS}</p></td>
                                </tr>
                            </Fragment> 
                        ))}
                    </table>
            </div><br/>
            <div className="contact">
                    <a href="https://twitter.com/kaopuny"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/mikokpy35"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100005184785636"><i class="fab fa-facebook-messenger"></i></a>
            </div>

        </div>
  );
}