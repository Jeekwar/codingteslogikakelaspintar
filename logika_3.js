let input = prompt('Masukkan Password');
let extrInput = input;
let passCek = /^(?=.*[a-z])(?=.*[A-Z])(?=.(.*[\W]){2,})(?=.*\d)(?!.*\d\d\d)[A-Za-z_\W][A-Za-z\d\W]{7,33}$/g;
let matchLowcase = /[a-z]/g;
let matchUpcase = /[A-Z]/g;
let match2 = /\d\d\d/g;
// test Up and low case
let a = matchUpcase.test(extrInput);
let b = matchLowcase.test(extrInput);
let resultCase = a && b;
//end test
let matchNum = /\d+/g;
let matchSym = / (.*[\W]){2,}/g;
let matchFirstChar = /^[A-Za-z_\W]/;
let matchLengLow = /.{8,}/g;
let matchLengHigh = /.{33,}/;
let result = passCek.test(extrInput);
let tests1 = match2.test(extrInput);
let resultNum = matchNum.test(extrInput);
let resultSym = matchSym.test(extrInput);
let resultFirstChar = matchFirstChar.test(extrInput);
let resultLengLow = matchLengLow.test(extrInput);
let resultLengHigh = matchLengHigh.test(extrInput);

if (result === false && resultCase === false && tests1 === false) {
  console.log('Harus memiliki huruf kapital dan huruf kecil');
} else if (result === false && resultCase === true && tests1 === true) {
  console.log('Tidak boleh memiliki 3 angka berurutan');
} else if (result === false && resultCase === true && tests1 === false && resultNum === false) {
  console.log('Harus ada angka');
} else if (result === false && resultCase === true && tests1 === false && resultNum === true && resultSym === false && resultFirstChar === false) {
  console.log('Karakter awal tidak boleh angka');
} else if (result === false && resultCase === true && tests1 === false && resultNum === true && resultSym === false && resultFirstChar === true && resultLengLow === false) {
  console.log('Kata sandi minimal 8 karakter');
} else if (result === false && resultCase === true && tests1 === false && resultNum === true && resultSym === false && resultFirstChar === true && resultLengLow === true && resultLengHigh === true) {
  console.log('Kata sandi maksimal 32 karakter');
} else if (result === false && resultCase === true && tests1 === false && resultNum === true && resultSym === false) {
  console.log('Harus ada minimal 2 simbol');
} else {
  console.log('Kata sandi valid');
}
