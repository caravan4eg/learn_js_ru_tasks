function add(x) {
    
    return function(y){
      return x+y
    }
  }

let x = +prompt('Input x');
let y = +prompt('Input y');

alert(`Summ of x and y: ${add(x)(y)}`);
