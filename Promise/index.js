//--=Promise=--
// let janji = new Promise((resolve, reject) => {
//   try {
//     resolve("Fullfilled");
//   } catch (err) {
//     reject(err);
//   }
// });
// //console.log(typeof janji);

// janji
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//--=Promise menggunakan function=--
//penjabaran dari anonymous promise

// function cbPromise(resolve, reject) {
//   try {
//     resolve("Fulfilled");
//   } catch (err) {
//     reject(err);
//   }
// }

// let janji = new Promise(cbPromise);
// // console.log(janji);

// janji
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//--=Penggunaan Promise yang benar=-
// function janjiManis() {
//   return new Promise((resolve, reject) => {
//     try {
//       resolve("janji Manis terpenuhi");
//     } catch (err) {
//       reject(err);
//     }
//   });
// }

// // console.log(janjiManis());
// janjiManis()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
