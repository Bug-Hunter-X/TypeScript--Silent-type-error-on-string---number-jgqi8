function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('Invalid input types. Both arguments must be numbers.');
  }
}

let result1 = addSafe(10, 20); // Correct usage
console.log(result1); // 30

//Type Guard example
function isNumber(val: any): val is number {
  return typeof val === 'number';
}

function addSafe2(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Invalid input types');
  }
}

let result2 = addSafe2(10, "20"); //Throws Error at compile time
console.log(result2); 