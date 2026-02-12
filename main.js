/**
 * MatrixJS
 * 
 * @author Benjamin P.C. Hovinga\
 * @license MIT
 */


function randomMatrixChar() {
  if (Math.random() < 0.5) {
    // Standard ASCII Range (33-126).
    const charCode = Math.floor(Math.random() * 94) + 33;
    return String.fromCharCode(charCode);
  } else {
    // Katakana Unicode Range (U+30A0-U+30FF).
    const charCode = Math.floor(Math.random() * 96) + 0x30A0;
    return String.fromCharCode(charCode);
  }
}


/** @param {string} hex */
function hexToRGB(hex) {
  // Remove leading hash.
  hex = hex.replace(/^#/, "");
  // Expand shorthand hex codes.
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join("");
  }
  // Parse each hex color into its decimal version
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return [r, g, b];
}


function main() {
  // Customize the program using url search parameters.
  const searchParams = new URLSearchParams(window.location.search);

  // Set the speed. Default = 40.
  const drawSpeed = searchParams.get("speed") || 40;
  // Set the font size. Default = 18.
  const fontSize = searchParams.get("size") || 18;
  // Set the font color. Default = #00FF00.
  const fontColor = "#" + (searchParams.get("fg") || "00FF00");
  // Set the background color. Default = #000000.
  const backgroundColor = hexToRGB(searchParams.get("bg") || "000000").join(", ");
  // Set the alpha level for the background fill. Default = 0.05.
  const backgroundAlpha = searchParams.get("alpha") || 0.05;

  // Set the background fill.
  const backgroundFill = `rgba(${backgroundColor}, ${backgroundAlpha})`;
  // Set the body background color.
  document.body.style.backgroundColor = `rgb(${backgroundColor})`

  // Setup the canvas element.
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("root");
  const canvasContext = canvas.getContext("2d");

  // Define a columns variable. This is updated by the resize function.
  let columns;

  function resize() {
    // Set the canvas size equal to the window size.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Set the number of columns that will fit inside the width.
    // Set the initial row of each column to be just off the bottom of the screen.
    columns = Array(Math.ceil(canvas.width / fontSize)).fill(Math.ceil(canvas.height / fontSize) + 1);
  }

  // Call resize now and add a listener for when the window size changes.
  resize();
  window.addEventListener("resize", resize);

  // Draws a new layer on the canvas.
  function draw() {
    // Cover the entire canvas with a transparent color.
    // Each call to draw will slowly fade the previously rendered text.
    canvasContext.fillStyle = backgroundFill;
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // Get ready to render the new text, set its color and font styles.
    canvasContext.fillStyle = fontColor;
    canvasContext.font = `${fontSize}px monospace`;

    // Loop through each column.
    for (let i = 0; i < columns.length; i++) {
      // Randomly select a character and render it to the canvas.
      canvasContext.fillText(randomMatrixChar(), i * fontSize, columns[i] * fontSize);

      // Once at the bottom randomly decide when to reset the column.
      // This prevents all columns from resetting at the same time.
      if (columns[i] * fontSize > canvas.height && Math.random() > 0.975) {
        columns[i] = 0;
      }

      // Increment this columns row counter.
      columns[i]++;
    }
  }

  // Draw a new layer every few ms.
  setInterval(draw, drawSpeed);
}


// Start main program when the DOM is ready
document.addEventListener("DOMContentLoaded", main);
