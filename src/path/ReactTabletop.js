import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import Navbar from '../component/Navbar/Navbar';
import './ReactTabletop.css';

export default function Status() {
  const [data, setData] = useState([]);

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
                <h4>C H E C K - S T A T U S</h4>
                <p>เช็คลำดับคิว & สถานะคอมมิชชั่น</p>
            </div>

            <br/><br/>

            <div className="tableforqueue">
                    <table>
                        <tr className="head">
                            <th>Q</th>
                            <th>NAME</th>
                            <th>DETAIL</th>
                            <th>STATUS</th>
                        </tr>

                        {data.map((item, i) => (
                            <Fragment key={i}>
                                <tr>
                                    <td>{item.QUEUE}</td>
                                    <td>{item.NAME}</td>
                                    <td>
                                        <p id="type">{item.TYPE}</p> 
                                        <p id="scale">{item.SCALE}</p>
                                    </td>
                                    <td><p id="status">{item.STATUS}</p></td>
                                </tr>
                            </Fragment> 
                        ))}
                    </table>
            </div>
            <br/><br/><br/>

        </div>
  );
}