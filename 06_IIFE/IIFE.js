// Immediately Invoked Function Expressions
// uses->> the function which must be immediately execute & in some cases we face problem due to global pollution so t delete pollution
(function chai(){
    // named iife
    console.log(`DB connected`)
})();

(
    () => {
        // unnamed iife
        console.log(`db is connected $`)
    }
)(); //:is must to end the first iife



(
    (name) => {
        console.log(`db is connected $ ${name}`)
    }
)("prajwal");


// ()->function definition ()->execution call ()()
