// CODING CHALLENGE 1
/*
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const arr1Copy = arr1.slice(1, -2);
  console.log(arr1Copy);

  const arrCorrect = arr1Copy.concat(arr2);
  console.log(arrCorrect);

  arrCorrect.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia2, dogsKate2);
*/

// CODING CHALLENGE 2 and 3
/*
const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge(dogs1));
console.log(calcAverageHumanAge(dogs2));
*/
