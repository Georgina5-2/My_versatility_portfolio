import React from "react";
import "./Footer.css";
import LogoFB from "./assets/logo-fb.png";
import LogoGH from "./assets/logo-gh.png";
import LogoLI from "./assets/logo-li.png";

const contactObj = [
    {
        name: "GitHub",
        url: "https://github.com/NganPham89",
        icon: LogoGH,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ngan-pham-524351276/",
        icon: LogoLI,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/",
        icon: LogoFB,
    }
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