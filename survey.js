const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable. :  ", (name) => {
  rl.question("What's an activity you like doing? :  ", (activity) => {
    rl.question("What do you listen to while doing that? :  ", (listenTo) => {
      rl.question("Which meal is your favourite? :  ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? :  ", (food) => {
          rl.question("Which sport is your absolute favourite? :  ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! :  ", (power) => {
              console.log(
                `Hello ${name}.\nNow we know you like to ${activity} while listen to ${listenTo}.\nWe know your favorite meal is ${meal}, and you like to have ${food}.\nWe also know ${sport} is your most enjoyed sport.\nWe even have imformation on your superpower: ${power}.\nAnd now, have a good day ^_^`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});
