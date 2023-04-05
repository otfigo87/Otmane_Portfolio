import React, {useEffect} from 'react';

const DynamicText = () => {

    useEffect(() => {
      const target = document.getElementById("text-target"); //span to inject my words

      let array = ["Simple", "Clear", "Smart", "Elegant"];
      let wordIndex = 0; //word to display
      let letterIndex = 0; //for letters animation

      const createLetter = () => {
        const letter = document.createElement("span");
        target.appendChild(letter);//empty span inside  "#target" span

        letter.classList.add("letter");// for my styles & animations
        letter.style.opacity = "0";
        letter.style.animation = "anim 5s ease forwards";// anim @ dynamicText.scss
        letter.textContent = array[wordIndex][letterIndex];//span content

        setTimeout(() => {
          letter.remove();
        }, 2000);
      };

      const loop = () => {
        setTimeout(() => {
          if (wordIndex >= array.length) { // Rerun after you loop over all the words
            wordIndex = 0;
            letterIndex = 0;
            loop();
          } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
          } else { //next word
            letterIndex = 0;
            wordIndex++;
            setTimeout(loop, 2500); //between words
          }
        }, 80); //between letters
      };

      loop();
    }, [])

  return (
    <span className="dynamic-text">
        <span>Simply</span>
        <span id="text-target"></span>
    </span>
  )
}

export default DynamicText