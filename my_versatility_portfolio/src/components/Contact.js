import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Header.css";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        handleShow();
        setName("");
        setEmail("");
        setMessage("");
    }

    const nameHandler = (event) => {
        const inputName = event.target.value;
        if (inputName.trim().length === 0 || name === "") {
            setNameErr(true);
        } else {
            setNameErr(false);
        }
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        const inputEmail = event.target.value.trim();
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputEmail) || email === "") {
            setEmailErr(false);
        } else {
            setEmailErr(true);
        }
        console.log(emailErr)
        setEmail(event.target.value);
    }

    const messageHandler = (event) => {
        const inputMessage = event.target.value;
        if (inputMessage.trim().length < 10 || message === "") {
            setMessageErr(true);
        } else {
            setMessageErr(false);
        }
        setMessage(inputMessage)
    }

    const emptyFieldCheck = () => {
        if (!name || emailErr || !message) {
            return <button className="button-inactive" disabled={true}>Submit</button>;
        } else {
            return <button className="button-active" onClick={handleSubmit}>Submit</button>;
        }
    }

    return (
        <div className="post-body">
            <h2 className="font-os font-pink d-flex justify-content-center m-4">Contact Me</h2>
            <form className="d-flex-col justify-content-center">
                <div className="d-flex justify-content-center p-2">
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        name="name"
                        onChange={nameHandler}
                        onFocus={nameHandler}
                        className="px-2"
                    ></input>
                </div>
                <div className="d-flex justify-content-center p-2">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        name="email"
                        onChange={emailHandler}
                        onFocus={emailHandler}
                        className="px-2"
                    ></input>
                </div>
                <div className="d-flex justify-content-center p-2">
                    <textarea
                        type="text"
                        placeholder="Type Your Message"
                        value={message}
                        name="text"
                        onChange={messageHandler}
                        onFocus={messageHandler}
                        className="px-2 text-box"
                    ></textarea>
                </div>

                <div className="d-flex justify-content-center p-3">
                    {emptyFieldCheck()}

                </div>

                <div className="d-flex-col justify-content-center p-1">
                    {nameErr ? <p className="d-flex justify-content-center p-1 font-os font-white">Please enter your name (required)</p> : null}
                    {emailErr ? <p className="d-flex justify-content-center p-1 font-os font-white">Please enter a valid email (required)</p> : null}
                    {messageErr ? <p className="d-flex justify-content-center p-1 font-os font-white">Please enter a short message (Minimum 10 characters required)</p> : null}
                </div>
            </form>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Your message has been sent.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default Contact;