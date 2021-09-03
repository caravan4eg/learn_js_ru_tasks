function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function nextPrime(n){
    if (n === 0) return 1;
    let nextPrimeCandidat = ++n;
    while (!isPrime(nextPrimeCandidat)) nextPrimeCandidat++;
    return nextPrimeCandidat;
}

function getPrimes(number){
    let primesArray = [];
    for (let i = 2; i < number; i++) {
        if (isPrime(i)) primesArray.push(i);
    }
    console.log(primesArray);
}

getPrimes(1000);
console.log(nextPrime(2971));