// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

// Array of allSpells
const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyReqired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyReqired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyReqired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyReqired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyReqired: 2921.5
    }
];


// Function for evil book
const MakeEvilSpellBook = () => {
    console.log("Evil Book");
    for (let spell of allSpells) {
        if (spell.isEvil === true) {
            console.log(`  ${spell.name}`)
        }
    }
};

// Function for good book
const MakeGoodSpellBook = () => {
    console.log("Good Book");
    for (let spell of allSpells) {
        if (spell.isEvil === false) {
            console.log(`  ${spell.name}`)
        }
    }
};

// Call the books
MakeGoodSpellBook(allSpells);
console.log();
MakeEvilSpellBook(allSpells);


