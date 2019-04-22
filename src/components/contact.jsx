import React, { Component } from "react";
import email from "./../assets/icons/email.svg";
import phone from "./../assets/icons/phone.svg";
import pdf from "./../assets/icons/pdf.svg";
import resume from "./../assets/Malcolm MacLure - Resume.pdf";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contactSection">
        <a className="aboutContact" target="blank" href={resume}>
          <div className="aboutContactDiv">
            <img style={{ width: "30px" }} src={pdf} />
            <div> Resume</div>
          </div>
        </a>
        <a className="aboutContact" href="mailto:malcolm.maclure@gmail.com">
          <div className="aboutContactDiv">
            <img style={{ width: "30px" }} src={email} />
            <div> malcolm.maclure@gmail.com</div>
          </div>
        </a>
        <a className="aboutContact" href="tel:9055105096">
          <div className="aboutContactDiv">
            <img style={{ width: "30px" }} src={phone} />
            <div> 905 510 5096</div>
          </div>
        </a>
      </div>
    );
  }
}

export default Contact;
