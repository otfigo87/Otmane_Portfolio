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

const Contact = () => {

  const [weather, setWeather] = useState()

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=f8bcee1649274f47a2f180053233003&q=15222&aqi=yes`
      )
      .then((res) => setWeather(res.data.current))
      .catch((err) => console.log(err));
  }, [weather])

  console.log(weather)
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
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <p>Pittsburgh</p>
              <motion.div
                className="weather"
                drag
                dragConstraints={{
                  left: -250,
                  right: 250,
                  top: -200,
                  bottom: 250,
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={weather.condition.icon} alt="weather icon" />
                <h5>{weather.condition.text}</h5>
                <h4>{`${weather.temp_f} °F`}</h4>
              </motion.div>
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