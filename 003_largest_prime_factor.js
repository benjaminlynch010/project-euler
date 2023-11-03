// The prime factors of 13195 are 5, 7, 13, 29
// What is the largest prime factor of the number 600851475143?

let factors = [];
let primeFactors = []

function getFactors(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
}

getFactors(13195);
console.log(factors);

function getPrimeFactors(array) {
  for (num of array) {
    
  }
}
