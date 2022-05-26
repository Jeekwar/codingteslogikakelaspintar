let x = 3;
let y = 7;
let max = 1000;

for (let i = 1; i < max; i++) {
  if (i % x == 0 && i % y == 0) {
    console.log('Z');
  } else if (i % x == 0 || i % y == 0) {
    console.log(i);
  }
}
