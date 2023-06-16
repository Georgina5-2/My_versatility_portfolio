import React from "react";
import "./Header.css";

const pages = [
    {
        name: "About",
        link: "#About"
    },
    {
        name: "Portfolio",
        link: "#Portfolio"
    },
    {
        name: "Resume",
        link: "#Resume"
    },
    {
        name: "Contact",
        link: "#Contact"
    },
]

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header className="border-bottom border-5 border-black">
            <div className="header" >
                <div className="px-2 pt-3 justify-content-start flex-row">
                    <h1 className="font-os font-large font-pink bg-blue px-2 col-md-2">GEORGINA XAVIER</h1> <br />
                    <p className="font-os font-thin font-blue bg-pink px-2 col-md-2">Full-Stack Web Developer</p>
                </div>
                <div className="ul d-lg-flex align-items-center justify-content-end p-2 px-5">
                    {pages.map((page) => {
                        return (
                            <div className="d-flex px-2 font-os px-3"><a href={page.link}
                                onClick={() => handlePageChange(page.name)}
                                className={currentPage === page.name ? "nav-active" : "nav-inactive"}>{page.name}</a></div>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header;