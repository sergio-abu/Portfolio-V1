import { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonHiking, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hiker.jpg" alt="" />
      </div>
      <div className="right">
        <h2><FontAwesomeIcon className='icon'icon={faPersonHiking} /> Send me a message</h2>
        <form onSubmit={handleSubmit} action="mailto:sergio-abu@proton.me" method="get">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span><FontAwesomeIcon className='icon'icon={faHandshakeAngle} /> Thank you. I'll reply soon.</span>}
        </form>
      </div>
    </div>
  );
}