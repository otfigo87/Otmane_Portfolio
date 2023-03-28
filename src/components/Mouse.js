import React, { useEffect } from 'react'

const Mouse = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        window.addEventListener("mousemove", (e) => {
            cursor.style.top = e.y + "px";
            cursor.style.left = e.x + "px"; 
        });
//for all clickable elements with class "hover" ==> add "hovered" to make circle smaller
        document.querySelectorAll(".hover").forEach((link) => {
            link.addEventListener("mouseover", () => {
                cursor.classList.add("hovered")//to make cursor circle smaller
            }); 
            link.addEventListener("mouseleave", () => {
              cursor.style.transition = ".3s ease-out";  
              cursor.classList.remove("hovered");//removed "hovered" class when leaving clickable element
            });
        })

    }, [])

  return (
    <span className="cursor"></span>
  )
}

export default Mouse