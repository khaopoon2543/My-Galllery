import React, { useEffect, useState, Fragment } from "react";
import Navbar from '../component/Navbar/Navbar';
import './Status.css';
import ReactGA from 'react-ga';
import axios from "axios";

export default function Status() {

  useEffect ( () => {
    ReactGA.initialize('UA-199620324-2');
    ReactGA.pageview('/status');
  }, [])


  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://sheet.best/api/sheets/01fb46c9-372b-4e49-9ff2-d0c42fb6d375')
        .then(res => setData(res))
  }, []);

  if (!data) {
      return<div />
  }


  return (
        <div className="App">
            <Navbar/>

            <div className="head-topic">
                <h4>Q U E U E - S T A T U S</h4>
                <p>ลำดับคิว & สถานะคอมมิชชั่น</p>
            </div>

            <br/><br/>

            <div className="tableforqueue">
                    <table>
                        <tr className="head">
                            <th id="queue"></th>
                            <th id="left">NAME</th>
                            <th>DETAIL</th>
                            <th>STATUS</th>
                        </tr>

                        {data.data.map((item, i) => (
                            <tr key={i}>
                                <td id="queue">{item.QUEUE}</td>
                                <td id="left">{item.NAME} {item.CONTACT}</td>
                                <td>
                                    <p id="type">{item.TYPE}</p> 
                                    <p id="scale">{item.SCALE}</p>
                                </td>
                                <td><p id="status">{item.STATUS}</p></td>
                            </tr>
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