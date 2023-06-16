import React from "react";

const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "React",
    "Bootstrap",
]

const backEndSkills = [
    "Node",
    "Express",
    "MySQL/Sequelize",
    "MongoDB/Mongoose",
    "GraphQL",
]

const Resume = () => {
    return (
        <div className="post-body d-flex-col">
            <h4 className="d-flex justify-content-center p-3 font-os font-pink font-large">View my resume <a href="https://drive.google.com/file/d/1rn_i7L6kUfQuTiQhVW1gjaq7p3QujmQT/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-decoration-none">&nbsp;here</a></h4>
            <div className="d-flex justify-content-evenly">
                <div className="pt-3">
                    <h3 className="font-os font-pink">Front-end Skills</h3>
                    <ul>
                        {frontEndSkills.map((skill) => {
                            return (<li className="font-os font-white font-thin">{skill}</li>)
                        })}
                    </ul>
                </div>
                <div className="pt-3">
                    <h3 className="font-os font-pink">Back-end Skills</h3>
                    <ul>
                        {backEndSkills.map((skill) => {
                            return (<li className="font-os font-white font-thin">{skill}</li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;