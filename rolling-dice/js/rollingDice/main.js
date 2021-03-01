// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

// Function to roll dice
const Roll = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// For loop to show 10 rolls
for (let i = 0; i < 10; i++) {
    let die1 = Roll();
    let die2 = Roll();

    let message = `${die1} + ${die2} === ${die1 + die2}`;

    if (die1 === die2) {
        message += " DOUBLES!";
    }

    console.log(message)
}

// Switch Statement for die emojis
const what = () => {
    let dieString = "Unknown";

    switch (this.Value) {
        case 1:
            dieString = "\u2680";
            break;
        case 2:
            dieString = "\u2681";
            break;
        case 3:
            dieString = "\u2682";
            break;
        case 4:
            dieString = "\u2683";
            break;
        case 5:
            dieString = "\u2684";
            break;
        case 6:
            dieString = "\u2685";
            break;
    }

    return dieString;
}
