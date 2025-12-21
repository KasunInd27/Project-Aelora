/*
  -Synchronous (Blocking) and Asynchronous (Non-Blocking)-
  *In JavaScript, synchronous and asynchronous describe how code is executed over time.
  >Synchronous : Code runs line by line, and each step waits for the previous one to finish.
  >Asynchronous : Long tasks run in the background, and the program continues executing without waiting.  
                 *This is often done using callbacks, promises, or async/await.
*/

//Asynchronous Example

/*console.log("A");

setTimeout(() => {
    console.log("B");
}, 5000);

console.log("C");*/

import { connectDB } from './infrastructure/db.js';

console.log("A");
connectDB();
console.log("B");



















