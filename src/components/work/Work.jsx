import React, { useEffect, useState } from 'react';
import WorkList from '../workList/WorkList';
import './work.scss';
import { webWork, mobileWork, designWork } from "../../data";

export const Work = () => {

  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webWork);
        break;
      case "mobile":
        setData(mobileWork);
        break;
      case "design":
        setData(designWork);
        break;
      default:
        setData(webWork);
        break;
    }
  }, [selected]);


  return (
    <div className='work' id='work'>

      <h1 class="title">My Work</h1>
      <ul>
        {list.map((item) => (
          <WorkList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((work) => (
          <div className="item">
            <img src={work.img} alt="" />
            <h3>{work.title}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}
