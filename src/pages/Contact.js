import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialMedia from "../components/SocialMedia";
import Buttons from "../components/Buttons";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Address</h4>
              <p>Pittsburgh, PA 15222</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Phone</h4>
              <CopyToClipboard text="7246918084" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Phone number copied!")}
                >
                  724-699-8084
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="aaotmane@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copied!")}
                >
                  aaotmane@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialMedia />
        </div>
        <Buttons left={"/project4"} />
        <div className="credits">
          <p>Otmane Aatik</p>
        </div>
      </div>
    </main>
  );
}

export default Contact