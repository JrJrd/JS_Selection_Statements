console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
// let magicNum = 3;
// let guessNum = prompt("Guess the number: ");

// guessNum = parseInt(guessNum); // Convert the input to a number

// if (guessNum === magicNum) {
//   console.log("Correct!");
// } else if (guessNum > magicNum) {
//   console.log("Too high");
// } else if (guessNum < magicNum) {
//   console.log("Too low");
// }


//Exercise 2

// let birthMonth = prompt("What is your birth month: ");
// switch (birthMonth) {
//   case "December":
//   case "January":
//   case "February":
//     console.log("winter");
//     break;
//   case "March":
//   case "April":
//   case "May":
//     console.log("Spring");
//     break;
//   case "June":
//   case "July":
//   case "August":
//     console.log("summer");
//     break;
//   case "September":
//   case "October":
//   case "November":
//     console.log("Fall");
//     break;
//   default:
//     console.log("Err");
// }
//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }


switch (typeId) {
  case "01":
    type = "Tank top";
    break;
    case "02":
      type = "Tank Top";
      break;
  case "03":
    type = "Long Sleeve";
    break;
    case "04":
      type = "Sweat Shirt";
      break;  
    default:
      type = "Other";
}

// if (colorId == "BK") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

switch (colorId) {
  case "BL":
    color = "Black";
    break;
    case "RD":
      color = "Blue";
      break;
  case "03":
    color = "Red";
    break;
    case "PU":
      color = "Purple";
      break;  
    default:
      color = "White";
}

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

switch (sizeId) {
  case "Small":
    size = "S";
    break;
    case "M":
      size = "Medium";
      break;
  case "L":
    size = "Large";
    break;
    case "XL":
      size = "Extra Large";
      break;  
    default:
      size = "One Size Fits All";
}
console.log(`Product: ${size} ${color} ${type}`);