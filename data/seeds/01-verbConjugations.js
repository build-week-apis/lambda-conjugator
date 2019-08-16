
const verbsDateJs = require('../seedingData.js');

let counter = 0;
let slicedArray = [];

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('verbConjugations').truncate();
  for(let i=0; i < verbsDateJs.length; i++ ){
    if (counter === 50){
      await knex('verbConjugations').insert(slicedArray);
      counter = 0;
      slicedArray = [];
    }
    if(i === 11450){
      // console.log("I hate knex")
      slicedArray.push(verbsDateJs.slice(11450))
      await knex('verbConjugations').insert(slicedArray);
    }
    else {
      slicedArray.push(verbsDateJs[i])
      counter++
    }
  }
};


// const array = require('../beginnerData.js')

// exports.seed = function(knex, Promise) {
//   return knex('verbConjugations')
//   // .del()
//   .then(function() {
//     // Inserts seed entries
//     return async () => {
//       let slicedArray = [];
//       let counter = 0;

//       for (let i = 0; i < array.length; i++) {
//           if (counter === 50){
//             console.log(slicedArray)
//             await knex('verbConjugations').insert(slicedArray);
//             counter = 0;
//             slicedArray = [];
//           }
//           else {
//             slicedArray.push(array[i])
//           }
//         }
//       };
//     });
// };



// const array = require('../beginnerData.js')

// console.log(array.length)

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('verbConjugations')
//     .del()
//     .then(function() {
//       // Inserts seed entries
//       return () => {
//         for (let i = 0; i < array.length; i++) {
//           knex('verbConjugations').insert(array[i]);
//         }
//       };
//     });
// };



// const { seeder } = require('knex-csv-seeder');
// console.log(seeder)
// exports.seed = seeder.seed({
//   table: 'verbConjugations',
//   file: './data/jehle_verb_database.csv',
//   recordsPerQuery: 5000,
//   // encoding: 'utf8' default encoding,
//   parser: {
//     delimiter: ',',
//     quote: '"',
//     escape: '\\'
//   }

//     // .then(function () {
//       // Inserts seed entries
//       // return knex('table_name').insert([
//       //   {id: 1, colName: 'rowValue1'},
//       //   {id: 2, colName: 'rowValue2'},
//       //   {id: 3, colName: 'rowValue3'}
//       // ]);
//     // });
// });

