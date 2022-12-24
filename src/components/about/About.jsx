import { useState } from "react";
import "./about.css";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/about1.png",
      title: "Me",
      desc:
        "I'm a software engineer",
      img:
        "./assets/about1.png",
      src: "",
    },
    {
      id: "2",
      icon: "./assets/about2.png",
      title: "Skills",
      desc:
        "Tech that I work with",
      img:
        "./assets/about2.png",
      src: "",
    },
    {
      id: "3",
      icon: "./assets/about3.png",
      title: "Links",
      desc:
        "All my links",
      img:
        "./assets/about3.png",
      src: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.src}><span>More</span></a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/button.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/button.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}