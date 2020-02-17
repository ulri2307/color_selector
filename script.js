window.addEventListener("DOMContentLoaded", start);

function start() {
  //Sences the change i the "input" and goes to the next function
  document.querySelector("input").addEventListener("input", getHEX);
}

function getHEX() {
  //gets the changed value (HEX) from the input
  let value = this.value;
  console.log(value);

  //Sences the change i the "input" and goes to the next function
  document.querySelector("input").addEventListener("input", convertToRGB);
  document.querySelector("input").addEventListener("input", displayTextHEX);
  document.querySelector("input").addEventListener("input", displayColor);
}

function convertToRGB() {
  let value = this.value;
  //"Slices" the string into the R-, G- and B values
  let stringR = value.slice(1, 3);
  let stringG = value.slice(3, 5);
  let stringB = value.slice(5, 7);

  //Converts the values to R/G/B numbers
  let r = parseInt(stringR, 16);
  let g = parseInt(stringG, 16);
  let b = parseInt(stringB, 16);

  console.log("r", r);
  console.log("g", g);
  console.log("b", b);

  convertToHSL(r, g, b);
  displayTextRGB(r, g, b);
}

function convertToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("r", r);
  console.log("g", g);
  console.log("b", b);

  console.log("hsl(%f,%f%,%f%)", h, s, l);

  displayTextHSL(h, s, l);
}

function displayColor() {
  let value = this.value;
  //Sets the color of the box
  document
    .querySelector(".colorbox")
    .style.setProperty("background-color", value);
}

function displayTextHEX() {
  let value = this.value;
  //sends the hex value to the HTML
  document.querySelector("#hex").textContent = value;
}

function displayTextRGB(rInput, gInput, bInput) {
  //Displays the r value from the RGB
  document.querySelector("#r").textContent = "R = " + rInput;
  console.log(rInput);
  //Displays the g value from the RGB
  document.querySelector("#g").textContent = "G = " + gInput;
  console.log(gInput);
  //Displays the b value from the RGB
  document.querySelector("#b").textContent = "B = " + bInput;
  console.log(bInput);
}

function displayTextHSL(hInput, sInput, lInput) {
  //Displays the h value from the HSL
  document.querySelector("#h").textContent = "H = " + hInput;
  console.log(hInput);
  //Displays the s value from the HSL
  document.querySelector("#s").textContent = "S = " + sInput;
  console.log(sInput);
  //Displays the l value from the HSL
  document.querySelector("#l").textContent = "L = " + lInput;
  console.log(lInput);
}
