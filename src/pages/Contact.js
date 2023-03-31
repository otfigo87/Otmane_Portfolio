import { useEffect, useState } from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialMedia from "../components/SocialMedia";
import Buttons from "../components/Buttons";
import {motion} from "framer-motion";
import axios from "axios";
import Weather from "../components/Weather";
// import { useLocation } from "react-router-dom";

const Contact = () => {

  const [weather, setWeather] = useState()


  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=f8bcee1649274f47a2f180053233003&q=15222&aqi=yes`
      )
      .then((res) => setWeather(res.data.current))
      .catch((err) => console.log(err));
  }, [])

  // console.log(weather)
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: 300
    }
  }
  return (
    <main>
      <Mouse />
      <motion.div
        variants={pageTransition}
        initial="out"
        animate="in"
        exit="out"
        transition={{ duration: 0.5 }}
        className="contact"
      >
        <Navigation />
        <Weather weather={weather}/>
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Location</h4>
              <p>Pittsburgh, PA</p>
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
      </motion.div>
    </main>
  );
}

export default Contact