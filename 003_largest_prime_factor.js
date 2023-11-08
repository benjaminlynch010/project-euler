// The prime factors of 13195 are 5, 7, 13, 29
// What is the largest prime factor of the number 600851475143?

let factors = []
let answer = factors[factors.length-1]

function getPrimeFactors(num) {
  while (num % 2 == 0) 
  {
    num = num/2
  }
  for (let i=3; i<num; i++)
  {
    while (num % i == 0)
    {
      factors.push(i)
      num = num / i
    }
  }
  if (num > 2) {
    factors.push(num)
  }  
}

getPrimeFactors(600851475143)
console.log(factors[factors.length-1])
