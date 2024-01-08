/*
About project: This is a small chatbot that tries to answer useful words and perform simple math operations.
Developer name: Shayan Mahmoudi
Date start: 1/3/2024
Date end: 1/3/2024
Teacher: Mr. Khateri
Email address: shayanunk@gmail.com
Github: UNKshayan
*/
// In script.js
let input = document.querySelector(".main-input");
let btn = document.querySelector(".main-button");
let chat = document.querySelector(".chat-container");
let form = document.querySelector(".form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let text = input.value;
  chat.insertAdjacentHTML("beforebegin", userTemplate(text));
  setTimeout(() => {
    chat.insertAdjacentHTML("beforebegin", robotTemplate(robotResponse()));
    form.reset();
  }, 1000);
});

function userTemplate(userMsg) {
  let time = getTime();
  return `
  <div class="user">
  <div class="time">
    <span>${time}</span>
  </div>
    <span>${userMsg}</span>
  </div>
  `;
}
function robotTemplate(robotMsg) {
  return `
  <div class="robot">
  <span>${robotMsg}</span>
  </div>   
  `;
}
function getTime() {
  let toDay = new Date();
  console.log(toDay);
  let hours = toDay.getHours();
  let min = toDay.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  let time = hours + ":" + min;

  return time;
}
function robotResponse() {
  let msg = input.value.toLowerCase();
  if (msg.includes("hello")) {
    return conversation[0][0].hello;
  } else if (!msg) {
    return "pleas ask me something";
  } else if (msg.includes("سلام")) {
    return conversation[0][1].helloFa;
  } else if (msg.includes("how are")) {
    return conversation[0][0].howAreYou;
  } else if (
    msg.includes("خوبی") ||
    msg.includes("چطوری") ||
    msg.includes("چخبر") ||
    msg.includes("چطوره")
  ) {
    return conversation[0][1].howAreYouFa;
  } else if (msg.includes("who are")) {
    return conversation[1][0].whoAreYou;
  } else if (
    msg.includes("تو کی") ||
    msg.includes("کی هستی") ||
    msg.includes("کیستی")
  ) {
    return conversation[1][1].WhoAreYouFa;
  } else if (msg.includes("you do")) {
    return conversation[1][0].do;
  } else if (msg.includes("کارت چیه") || msg.includes("چیکار میکنی")) {
    return conversation[1][1].doFa;
  } else if (msg.includes("your dev")) {
    return conversation[1][0].developer;
  } else if (
    msg.includes("سازنت") ||
    msg.includes("سازنده تو") ||
    msg.includes("تو رو ساخته")
  ) {
    return conversation[1][1].developerFa;
  } else if (msg.includes("commands")) {
    return conversation[1][0].commands;
  } else if (msg.includes("کامند") || msg.includes("دستورات")) {
    return conversation[1][1].commandsFa;
  } else if (msg.includes("jawad") || msg.includes("javad")) {
    return conversation[1][0].jawad;
  } else if (msg.includes("جواد")) {
    return conversation[1][1].jawadFa;
  } else if (msg.includes("live")) {
    return conversation[1][0].city;
  } else if (msg.includes("زندگی میکنی")) {
    return conversation[1][1].cityFa;
  } else{
    return "Look at the commands and ask your question according to the given commands."
  }
}

// list of conversation in chatBot
const conversation = [
  // greeting list(array)
  [
    // ENGLISH hello (obj), will be used if the user input matches "hello" .
    {
      hello: "Hello, what can i do for you?",
      howAreYou: "Im good but you are better than me.",
    },
    // FARSI hello (obj), will be used if the user input matches "سلام" .
    {
      helloFa: "سلام، چه کمکی از دستم برمیاد؟",
      howAreYouFa: "من خوبم ولی تو از من بهتری.",
    },
  ],
  // Repetition on questions(array)
  [
    // ENGLISH Repetition on questions(obj)
    {
      whoAreYou: "I am a bot to chat and ask your questions",
      do: "I will answer some of your questions and chats as much as possible and I will also do some math operations.",
      developer:
        "My developer is Shayan Mahmoudi who is learning JavaScript and this bot is also a practice project.",
      commands:
        "You can see my commands on the website page or the readme of the Github page",
      jawad:
        "Javad is a character that no one has seen and knows except the professor.",
      city: "I live in Iran in the city of Bushehr.",
    },
    // FARSI Repetition on questions(obj)
    {
      WhoAreYouFa: " من یک ربات برای چت کردن و پرسیدن سوال های شما هستم",
      doFa: "من به یکسری از  سوال ها و چت های شما تا جایی که بشه جواب میدم و یکسری از عمل های ریاضی رو هم انجام میدهم.",
      developerFa:
        "سازنده من شایان محمودی است که درحال یادگیری جاوا اسکریپت است و این بات هم یک پروژه تمرینی است.",
      commandsFa:
        "شما کامند های من رو میتونید در صفحه گیت هاب من یا همین صفحه ببینید و از آن استفاده کنید.",
      jawadFa:
        "جواد یک شخصیت است که هیچکس هنوز اون رو بجز استاد ندیده و نمیشناستش.",
      cityFa: "من در ایران در شهر بوشهر زندگی میکنم.",
    },
  ],
];

// for (let index = 0; index < conversation.length; index++) {
//   console.log(conversation[index]);
//   for (let j = 0; j < index.length; j++) {
//   }

// }

// for (let index = 0; index < conversation.length; index++) {
//   const element = conversation[index];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//   }
// }
