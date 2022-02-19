const createWoodBlock = () => {
    // Return an object with 4 properties.
    return {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose:
    }
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    return `The ${woodBlock.length}-inch, ${woodBlock.material} woodblock was carved into a wooden ${woodBlock.purpose}`
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving()  // <-- Missing an argument. Fix it.

console.log(carvingString)


// In the createWoodBlock function, return an object with the following properties

// A type property with a value of "wood block"
// A length property with a value of 10
// A material property with a value of "pine"
// A purpose property with a value of "flute"
// In the createBeautifulCarving function, return a string that looks like the following template.

// "The 10-inch, pine woodblock was carved into a wooden flute"

