let numbers : number[] = [1, 2, 3, 4]

numbers.forEach((num) => {
    console.log(num);
})

// By default javascript arrays contain elements of different type. so if you want to use your array for different elements
// you can leave of annotating the type.

let my_array = [1, "daf"]

// If you initialized with the same types , it annotets it with that type.
     
let my_numbers = [1, 3,5, 6, 7]; // TypeScript infers the type as number[]