import React from "react";
import "./Header.css"

import ImgSoccer from "./assets/Soccer_Betting.png";
import ImgEvent from "./assets/Event_Scheduler.png";
import ImgSocial from "./assets/Social_Media_API.png"
import ImgWeather from "./assets/Weather.png"

const projects = [
    {
        name: "Soccer Betting Minigame",
        github: "https://github.com/NganPham89/Soccer-Betting-Mini-Game",
        url: "https://nganpham89.github.io/Soccer-Betting-Mini-Game/",
        img: ImgSoccer,
    },
    {
        name: "Weather Forecast",
        github: "https://github.com/Georgina5-2/Weather_forecast",
        url: "https://georgina5-2.github.io/Weather_forecast/",
        img: ImgWeather,
    },
    {
        name: "Social Media Backend",
        github: "https://github.com/Georgina5-2/Social-Network-API",
        url: "https://georgina5-2.github.io/Social-Network-API/",
        img:ImgSocial,
    },

    {
        name: "Event Scheduler",
        github: "https://github.com/Georgina5-2/Event_Scheduler",
        url: "https://georgina5-2.github.io/Event_Scheduler/",
        img:ImgEvent,
    },
    
]

const Portfolio = () => {
    return (
        <div className="post-body d-flex-row">
            <h2 className="font-os font-pink d-flex justify-content-center m-4">This is a collection of my most notable projects.</h2>
            <div className="d-lg-flex justify-content-around flex-wrap">
                {projects.map((project) => {
                    return (
                        <div className="d-flex-row my-5 mx-3 justify-content-center">
                            <a href={project.github} target="_blank" rel="noreferrer" className="nav-active d-flex justify-content-center">
                                <h3 className="font-os">{project.name}</h3>
                            </a>
                            <a href={project.url} target="_blank" rel="noreferrer" className="d-flex justify-content-center">
                                <img src={project.img} alt={project.name} width={450} height={300} className="border-blue"/>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;