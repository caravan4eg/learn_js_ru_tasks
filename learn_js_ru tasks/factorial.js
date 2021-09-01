function factorial(n) {
    return n ? n * factorial(n-1) : 1;
    }

  let n = +prompt('Input number');
  alert(`n! is ${factorial(n)}`)