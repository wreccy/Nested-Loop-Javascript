let star = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     star += "*";
//   }
//   star += "\n";
// }

// console.log(star);

// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     star += "*";
//   }
//   star += "\n";
// }

// console.log(star);

// for (let i = 0; i < 9; i++) {
//   if (i < 5) {
//     for (let j = 0; j <= i; j++) {
//       star += "*";
//     }
//     star += "\n";
//   } else {
//     for (let j = 9; j > i; j--) {
//       star += "*";
//     }
//     star += "\n";
//   }
// }

// console.log(star);

// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j <= 5; j++) {
//     if (j >= i) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   star += "\n";
// }

// console.log(star);

// for (let i = 5; i > 0; i--) {
//   for (let j = 5; j > 0; j--) {
//     if (j > i) {
//       star += " ";
//     } else {
//       star += "*";
//     }
//   }
//   star += "\n";
// }

// console.log(star);

// for (let i = 0; i < 5; i++) {
//   for (let j = i; j < 5; j++) {
//     star += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     star += "*";
//   }
//   for (let l = 0; l <= i - 1; l++) {
//     star += "*";
//   }
//   star += "\n";
// }

// console.log(star);

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {
//     star += " ";
//   }
//   for (let k = i; k < 5; k++) {
//     star += "*";
//   }
//   for (let l = i + 1; l < 5; l++) {
//     star += "*";
//   }
//   star += "\n";
// }

// console.log(star);

for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < 6; j++) {
      if (j % 2 === 0) {
        star += "*";
      } else {
        star += " ";
      }
    }
  } else {
    for (let j = 0; j < 6; j++) {
      if (j % 2 === 0) {
        star += " ";
      } else {
        star += "*";
      }
    }
  }
  star += "\n";
}

console.log(star);
