import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [messageTitle, setMessageTitle] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const title = e.target.title.value; // Obtener el nombre del mensaje
    setMessageTitle(title);

    emailjs
      .sendForm(
        "service_lqc8l1q",
        "template_qaj5woz",
        form.current,
        "kI7uwox-gMIRkhAt8"
      )
      .then((result) => {
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error sending message:", error.text);
        alert("Failed to send message. Please try again later.");
      });

    e.target.reset();
  };

  const closePopup = () => {
    setShowPopup(false); // Cerrar el Popup
  };

  return (
    <div className="ContSection">
      <h1 className="orange ">Let’s talk</h1>
      <form ref={form} onSubmit={sendEmail} className="formCont">
        <input
          type="text"
          id="fname"
          className="FrmInput"
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          id="email"
          className="FrmInput"
          name="email"
          placeholder="Your Email"
        />

        <textarea
          type="text"
          id="message"
          className="FrmInput"
          name="message"
          placeholder="Message, don't forget your name. "
        />
        <button type="submit" className="white button">
          <h1>Send Message</h1>
        </button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Message sended</h2>
            <p className="black">
              Hi, thanks for sending me the message:{" "}
              <strong>"{messageTitle}"</strong>, I'm going to reply as soon as
              possible.
            </p>
            <button className="popup-button" onClick={closePopup}>
              <h2 className="white">OK</h2>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contact;
