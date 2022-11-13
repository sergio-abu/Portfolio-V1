import { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = () => {
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
      </div>
      <div className="right">
        <div className="card">
          <h2><FontAwesomeIcon className='icon'icon={faEnvelope} /> Send me a message</h2>
          <form action="mailto:sergio-abu@proton.me?subject=Dev" onSubmit={handleSubmit} method="post">
            <input type="text" placeholder="Email" required/>
            <textarea placeholder="Write your message here..." required></textarea>
            <button type="submit">Send</button>
            {message && <span><FontAwesomeIcon className='icon'icon={faHandshakeAngle} /> I'll reply soon.</span>}
          </form>
        </div>
      </div>
    </div>
  );
}