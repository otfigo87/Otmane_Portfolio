import React from "react";

const SocialMedia = () => {

  //onMouseOver animations
    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");
        // console.log(icons)
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${
                  e.offsetY - 13
                }px)`;
            })
            link.addEventListener("mouseleave", () => {
              link.style.transform = "";
            });
        })
    }


  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://github.com/otfigo87"
          target="_blank"
          rel="noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-github"></i>
          </li>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://linkedin.com/in/otmane-aatik"
          target="_blank"
          rel="noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-linkedin-in"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialMedia;
