import React from "react";
import ProfileImage from "./assets/Profile.jpg"
import "./Header.css"

const About = () => {
    return (
        <div className="d-lg-flex align-items-center justify-content-center post-body">
                <div className="d-flex justify-content-center">
                    <img src={ProfileImage} width={300} alt="my facial profile" className="m-5 border-pink" />
                </div>
                <div className="d-flex-col align-items-center justify-content-center col-md-4">
                    <h2 className="font-os font-pink font-large mt-3 ms-3">Hi, this is Georgina</h2>
                    <p className="font-white font-os mx-3 font-medium">I am passionate about learning the latest web technologies so that I can show my immense skills and versatility in coding</p> 
                </div>
            </div>
    )
}

export default About;