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


function main() {
  // Default font size (px).
  const fontSize = 18;

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
    // Cover the entire canvas with a highly transparent black.
    // Each call to draw will slowly fade the previously rendered text.
    canvasContext.fillStyle = "rgba(0, 0, 0, 0.05)";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // Get ready to render the new text, set its color and font styles.
    canvasContext.fillStyle = "#0f0";
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

  // Draw a new layer every 40ms.
  setInterval(draw, 40);
}


// Start main program when the DOM is ready
document.addEventListener("DOMContentLoaded", main);
