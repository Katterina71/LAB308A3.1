// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
}
for (let id = 1; id < 10; id++) {
  central(id)
    .then((returnedValue) => {
      console.log(returnedValue);
      return;
    })
    .catch((error) => {
      console.log(error);
    });
}

// for (let id = 1; id < 10; id++) {
//   db1(id).then((returnedValue) => {
//     console.log(returnedValue);
//     return;
//   });
// }

// db1, db2, and db3: These databases contain the user's basic information, including username, website, and company. Accessing these databases will return an object with these properties. If one of these databases encounters an error, your function should return a rejected promise indicating which database failed.
// You can access these databases like so:
// const returnedValue = await db1(id);
// // or
// db1(id).then((returnedValue) => { ... });

// This is where the dbs object in the starter code can become useful. Using this object, you can access each database directly using the string returned from central by using square bracket notation, e.g.:
// dbs[valueReturnedFromCentral](id)
// This can help circumvent some conditional logic that would otherwise be required.
// vault: The personal data for each user is contained within the vault database since its access and usage is restricted by law. The vault will return an object with the user's name, email, address, and phone, and can be accessed like so:
// const returnedValue = await vault(id);
// // or
// vault(id).then((returnedValue) => { ... });
