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
      const responses = [
        "I'm doing well, thank you. How about yourself?",
        "I'm feeling great today! How about you?",
        "I'm fine, thanks! How are things on your end?",
        "I'm doing good! How are you doing?",
        "I'm great, thanks for asking! How's your day going?",
        "I'm feeling fantastic! How about you?",
        "I'm doing well and ready to assist you. How are you?",
        "I'm doing fine. How about yourself?"
      ];
    
      const randomIndex = Math.floor(Math.random() * responses.length);
      const response = responses[randomIndex];
    
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = response;
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
      const responses = [
        "That's great to hear!",
        "I'm glad you're doing well!",
        "Fantastic! Keep up the good vibes!",
        "Awesome! Wishing you a wonderful day!",
        "Wonderful! May your day continue to be filled with positivity!",
        "That's fantastic news!",
        "I'm happy for you!",
        "Great! Stay positive and keep shining!",
        "That's wonderful to know!"
      ];
    
      const randomIndex = Math.floor(Math.random() * responses.length);
      const response = responses[randomIndex];
    
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = response;
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

    if (text.includes("why")) {
      const responses = [
        "I'm not sure, to be honest.",
        "I don't have the information to answer that.",
        "I wish I knew, but I don't have an answer.",
        "It's a mystery to me as well.",
        "I'm afraid I can't provide an explanation.",
        "I don't have any insights on that.",
        "That's beyond my understanding.",
        "I'm not equipped to give a reason for that.",
        "I'm sorry, I don't have any idea.",
        "I'm as clueless as you are."
      ];
    
      const randomIndex = Math.floor(Math.random() * responses.length);
      const response = responses[randomIndex];
    
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = response;
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

    // Array of jokes
// Array of jokes
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why couldn't the bicycle find its way home? It lost its bearings!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did the grape do when it got stepped on? It let out a little wine!",
  "How does a penguin build its house? Igloos it together!",
  "What do you call a fake noodle? An impasta!",
  "Why don't eggs tell jokes? Because they might crack up!",
  "I got a job at a bakery because I kneaded dough!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you get if you cross a snowman and a vampire? Frostbite!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I used to play piano by ear, but now I use my hands!",
  "What did one wall say to the other? I'll meet you at the corner!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "How do you organize a space party? You planet!",
  "Why don't scientists trust atoms? Because they make up everything!",
];

// Function to get a random joke
function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

// Assuming 'text' contains user input
if (text.includes("tell me a joke") || text.includes("tell me jokes")) {
  const joke = getRandomJoke();
  const p = document.createElement("p");
  p.classList.add("replay");
  p.innerText = joke;
  texts.appendChild(p);
}



    if (text.includes("hello") || text.includes("hi")) {
      const greetings = [
        "Hello!",
        "Hi there!",
        "Hey!",
        "Greetings!",
        "Hi!",
        "Hello, how can I assist you?",
        "Hi, what can I help you with today?",
        "Hey there, how can I be of service?",
        "Hi, nice to see you!",
        "Hello, how's your day going?"
      ];
    
      const randomIndex = Math.floor(Math.random() * greetings.length);
      const greeting = greetings[randomIndex];
    
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = greeting;
      texts.appendChild(p);
    }
    

    if (text.includes("thank you") || text.includes("thanks")) {
      const responses = [
        "You're welcome!",
        "You're very welcome!",
        "No problem, happy to help!",
        "Glad I could assist!",
        "You're grateful, I'm here to help!",
        "Anytime!",
        "You're welcome! Is there anything else I can do for you?",
        "It was my pleasure!",
        "Don't mention it!",
        "You're welcome! Have a great day!"
      ];
    
      const randomIndex = Math.floor(Math.random() * responses.length);
      const response = responses[randomIndex];
    
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = response;
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
      window.open("https://www.youtube.com");
    }

    if (text.includes("open Google")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Google";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.google.com");
    }

    if (text.includes("open sejong portal")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Sejong Portal";
      texts.appendChild(p);
      console.log("opening Sejong Portal");
      window.open("https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp?rtUrl=sjpt.sejong.ac.kr");
    }

    if (text.includes("open Instagram") ||
        text.includes("open my insta") ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Just a second!";
      texts.appendChild(p);
      console.log("opening Instagram");
      window.open("https://www.instagram.com/mr_sadriddinov/");

      
    }


    if (text.includes("open chat") ||
    text.includes("open AI chat") ) {
  p = document.createElement("p");
  p.classList.add("replay");
  p.innerText = "Just a second!";
  texts.appendChild(p);
  console.log("opening ChatGPT");
  window.open("https://chat.openai.com/");

  
}
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
