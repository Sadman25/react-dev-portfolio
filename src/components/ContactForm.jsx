import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shadman.saqif@gmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            shadman.saqif@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +88 01711-932340
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Dhaka, Bangladesh
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form action="https://formsubmit.co/shadman.saqif@gmail.com" method="POST"  name="contact" netlify>
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="text" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input type="hidden" name="_next" value="http://localhost:5173/"></input>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
