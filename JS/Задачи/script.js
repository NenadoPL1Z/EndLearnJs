"use strict";

function creatPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(8, 0, "-");
  console.log(numbers);
  return `${numbers.splice(0, 5).join("")} ${numbers.join("")}`;
}
console.log(creatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function like(names) {
  if (names.length == 0) {
    return "no one likes this";
  }
  if (names.length == 1) {
    return `${names[0]} likes this`;
  }
  if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(like([]));

function accum(s) {
  let comp = "";
  for (let x = 0; x < s.length; x++) {
    if (x == 0) {
      comp += s[x].toUpperCase();
    } else {
      comp += "-" + s[x].toUpperCase();
      for (let y = 0; y != x; y++) {
        comp += s[x].toLowerCase();
      }
    }
  }
  return comp;
}

console.log(accum("ZPGL"));
