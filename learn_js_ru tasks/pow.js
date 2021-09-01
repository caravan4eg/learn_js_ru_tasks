function pow(num, step) {
  let mul = 1;
  for (let i = 0; i < step; i++) {
    mul *= num;
  }
  return mul;
}

let num = +prompt("Input number");
let step = +prompt("Input step");
alert(`${num} ** ${step} = ${pow(num, step)} `);
