resultPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (response) => {
    return response.json();
  }
);

resultPromise.then((jsonData) => {
  console.log(jsonData);
});

// let isAdmin = true;

// const validAdminPromise = new Promise((resolve, reject) => {
//   if (isAdmin) {
//     resolve({
//       message: "YOU ARE AUTHORIZED FOR ADMIN ROLE",
//       rights: "read-write-update",
//     });
//   } else {
//     reject({
//       message: "YOU ARE NOT AUTHORIZED FOR ADMIN ROLE",
//       rights: "read",
//     });
//   }
// });

// setTimeout(() => {
//   validAdminPromise
//     .then((response) => {
//       console.log(
//         response.message,
//         "\nYou have following rights:\n" + response.rights
//       );
//     })
//     .catch((errorResponse) => {
//       console.log(
//         errorResponse.message,
//         "You have following rights:\n" + errorResponse.rights
//       );
//     });
// }, 10);
// console.log("Hello");
