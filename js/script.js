
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
let conversation = [
  // greeting list(array)
  [
    // ENGLISH hello (obj), will be used if the user input matches "hello", "hello" or "hey".
    {
      hello: "Hello, what can i do for you?",
      hi: "Hello, what can i do for you?",
      hey: "Hello, what can i do for you?",
    },
    // hello persian (obj), will be used if the user input matches "سلام" will be used if the user input matches "hello", "hello" or "hey".
    {
      سلام: "سلام، چه کمکی از دستم برمیاد؟",
    },
  ],
];
