// Index signatures in TypeScript 

 class StringArray {
    
   [index: number]: string;
   [studentId: string]: string; // Index signature for string keys

 
 } 

 let myArray = new StringArray();
 myArray[0] = 'Hello';
 myArray[1] = 'World';

myArray.student1 = 'Hailemeskel'; // Assigning a string to a string index
myArray.student2 = 'Mahi'