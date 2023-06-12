const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine, thanks! What about you?";
      texts.appendChild(p);
    }

    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name has not been given yet because Otabek is so busy nowadays!";
      texts.appendChild(p);
    }

    if (
      text.includes("I am also fine") ||
      text.includes("I'm also fine")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Happy for you!";
      texts.appendChild(p);
    }

    if (
      text.includes("how old are you") 
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I'm 17 days old";
      texts.appendChild(p);
    }

    if (
      text.includes("why") 
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I have no any";
      texts.appendChild(p);
    }

    if (
      text.includes("what is your hobby") ||
      text.includes("what's your hobby")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hacking whoever uses me";
      texts.appendChild(p);
    }

    if (
      text.includes("are you hacking me") 
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Just joking! XaXaXa";
      texts.appendChild(p);
    }

    if (
      text.includes("hello") ||
      text.includes("hi")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hellooooo";
      texts.appendChild(p);
    }

    if (
      text.includes("thank you") ||
      text.includes("thanks")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "You are welcome!";
      texts.appendChild(p);
    }

    if (
      text.includes("what do you want") ||
      text.includes("what is your purpose")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Otabek should get A+ from AI course😎";
      texts.appendChild(p);
    }
    
    
    if (text.includes("open my YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/@otabeksadriddinov9845");
    }

    if (text.includes("who's the strongest student") ||
        text.includes("who is the strongest person") ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Just a second!";
      texts.appendChild(p);
      console.log("opening Instagram");
      window.open("https://www.instagram.com/mr_sadriddinov/");

      
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
