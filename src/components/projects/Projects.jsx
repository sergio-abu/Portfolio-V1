import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./projects.css";
import {
  firstPage,
  secondPage,
  thirdPage,
  fourthPage,
} from "../../data";

export default function Projects() {
  const [selected, setSelected] = useState("1");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "1",
      title: "Web apps",
    },
    {
      id: "2",
      title: "Fintech",
    },
    {
      id: "3",
      title: "Malware",
    },
    {
      id: "4",
      title: "APIs",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "1":
        setData(firstPage);
        break;
      case "2":
        setData(secondPage);
        break;
      case "3":
        setData(thirdPage);
        break;
      case "4":
        setData(fourthPage);
        break;
      default:
        setData(firstPage);
        break;
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.src}>
            <div className="item"> 
              <img
                src={d.img}
                alt=""
              />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}