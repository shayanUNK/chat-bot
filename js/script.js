/*
About project: This is a small chatbot that tries to answer useful words and perform simple math operations.
Developer name: Shayan Mahmoudi
Date start: 1/3/2024
Date end: 1/3/2024
Teacher: Mr. Khateri
Email address: shayanunk@gmail.com
Github: UNKshayan
*/

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
      WhoAreYouFa: "یک من ربات برای چت کردن و پرسیدن سوال های شما هستم",
      doFa: "من به یکسری از  سوال ها و چت های شما تا جایی که بشه جواب میدم و یکسری از عمل های ریاضی رو هم انجام میدهم.",
      developerFa:
        "سازنده من شایان محمودی است که درحال یادگیری جاوا اسکریپت است و این بات هم یک پروژه تمرینی است.",
      commandsFa:
        "کامند های من رو میتونی در صفحه وبسایت یا readme صفحه گیتهاب ببینی",
      jawadFa:
        "جواد یک شخصیت است که هیچکس هنوز اون رو بجز استاد ندیده و نمیشناستش.",
      cityFa: "من در ایران در شهر بوشهر زندگی میکنم.",
    },
  ],
];
function userInput() {
  let num = 0;
  while (num < 10) {
    let Input = prompt("Ask your question");
    if (Input) {
      userOutput(Input);
    } else {
      userOutput();
    }
    num++;
  }
  alert("Refresh the page for ask another question")
}
userInput();

function userOutput(output) {
  if (!output) {
    alert("Ask question");
  } else {
    alert(output);
  }
}
