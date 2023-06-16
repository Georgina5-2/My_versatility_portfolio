import React from "react";
import "./Footer.css";
import LogoGH from "./assets/GitHub-Mark.png";
import LogoLI from "./assets/Linkedin_Mark.png";

const contactObj = [
    {
        name: "GitHub",
        url: "https://github.com/Georgina5-2",
        icon: LogoGH,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/georgina-xavier-690xls?",
        icon:LogoLI ,
    },
    
]

const Footer = () => {
    return (
        <footer className="footer d-flex align-items-center justify-content-center mt-3">
            <div className="">
                <div className="ul-footer justify-content-center align-items-center d-flex">
                    {contactObj.map((contact) => {
                        return (
                            <div className="p-3 px-4">
                                <a href={contact.url} target="_blank" rel="noreferrer">
                                    <img src={contact.icon} alt={contact.name} width={50}/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer;