const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileBuilder = function() {
  let output = "";

  rl.question('What is your name? ', (answer) => {
     output += answer;  
     rl.question('What do you listen to? ', (answer) => {
       output += ` loves listening to ${answer} while`;  
       rl.question('What activity you like doing? ', (answer) => {
         output += ` ${answer},`;  
         rl.question('What is your favourite food? ', (answer) => {
          output += ` devouring ${answer} for `;  
          rl.question('What is your favourite meal? ', (answer) => {
            output += answer;  
            rl.question('What is your favourite sport? ', (answer) => {
              output += `, prefers ${answer} over any other sport, and is amazing at `;  
              rl.question('What is your super power? ', (answer) => {
                output += `${answer}.`;  
                process.stdout.write(output + "\n");
                rl.close();
                });
              });
            });     
         });
        });
      });
    });
  
};
profileBuilder();



