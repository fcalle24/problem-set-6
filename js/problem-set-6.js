/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');

ctx.font = '48px sans-serif';
ctx.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  const canvas = document.getElementById('canvas2');
  const ctx = canvas.getContext('2d');
  let height = Number(prompt("Please enter a height."));
  let width =  Number(prompt("Please enter a width."));
  let x =  Number(prompt("Please enter a x value."));
  let y =  Number(prompt("Please enter a y value."));

if (height < 1){
  alert("Your height was too small.");
} else if (width < 1){
  alert("Your width was too small.");
} else if (x < 5 ){
  alert("Your x value was too small.");
} else if (y < 5 ){
  alert("Your y value was too small.");
} else if (x + width > 1024){
  alert("The rectangle will not fit on the canvas.");
} else if (y + height > 512){
  alert("The rectangle will not fit on the canvas.");
} else if (isNaN (height) || isNaN (width) || isNaN (x) || isNaN (y)) {
  alert("One of your inputs is not a number.")
}

ctx.strokeRect(x, y, width, height);

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

  function drawColoredRectangle() {
  const canvas = document.getElementById('canvas3');
  const ctx = canvas.getContext('2d');
  let color = String(prompt("Color:"));
 if (color == "black" || color == "blue" || color =="green" || color == "orange" || color == "purple" || color == "red" || color == "yellow"){
    ctx.fillStyle = color;
    ctx.fillRect(10, 10, 100, 50);
    ctx.fill()
  } else {
    alert(color+" is not a supported color");
    ctx.clearRect(0, 0, 1024, 512);
  }
}


/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const canvas = document.getElementById('canvas4');
  const ctx = canvas.getContext('2d');
  let s1 = Number(prompt("Slide 1:"));
  let s2 = Number(prompt("Slide 2:"));
  let s3 = Number(prompt("Slide 3:"));

  if (s1 > 502 || s1 <= 0 || s1 > s2 || s1 > s3){
  alert("That is not a valid right triangle.");
} else if (s2 > 1014 || s2 < s1 || s2 > s3){
  alert("That is not a valid right triangle.");
} else if ((s1 * s1) + (s2 * s2) != (s3 * s3)){
  alert("That is not a valid right triangle.");
} else if (isNaN (s1) || isNaN (s2) || isNaN (s3)){
  alert("One of your inputs is not a number.");
}

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, (s1 + 10));
ctx.lineTo((s2 + 10), (s1 + 10));
ctx.lineTo(10, 10);
ctx.stroke()

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const canvas = document.getElementById('canvas5');
  const ctx = canvas.getContext('2d');
  let head = Number(prompt("Radius:"))
  
  if (head <= 0){
    alert ("Your radius is too small.");
  } else if (head >= 251){
    alert("The smiley face will not fit on the canvas.");
  } else if (isNaN(head)) {
         alert("Your input is not a number.");
       } else {

  let smile = head * 0.7
  let eye = head * 0.1
  let a = (head / 100);
  let b = (head * 2 + 10);
  let c = (head * 2 / 3 + 10);
  let d = (head * 2 / 3 * 2 + 10);

   ctx.beginPath();
  ctx.arc((head + 10), (head + 10), head, 0, Math.PI * 2, true); 
  ctx.stroke();
  ctx.closePath();

  ctx.moveTo(b, (head + 10));

  ctx.beginPath();
  ctx.arc((head + 10), (head + 10), (head * 0.7), 0, Math.PI, false);  
  ctx.stroke();
  ctx.closePath();

  ctx.moveTo(c, head);

  ctx.beginPath();
  ctx.arc(c, (smile + 10), (eye), 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();

  ctx.moveTo(d, head);

  ctx.beginPath();
  ctx.arc(d, (smile + 10), (eye), 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
       }
}


/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  const canvas = document.getElementById('canvas6');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let or = Math.floor(Number(prompt("Outer Radius:")));
  let ir = Math.floor (Number(prompt("Inner Radius:")));

if (or <= ir){
  alert("Your outer radius must be larger than your inner radius.");
} else if (or <= 1){
  alert("Your outer radius is too small");
} else if (ir <= 0){
  alert("Your inner radius is too small");
} else if (isNaN(or)|| isNaN(ir)){
  alert("One of your inputs is not a number.");
} else {
  ctx.moveTo(125, 125 - or);
    let x = 1.5;
  
  for (let i = 0 ; i < 5; i++) {
      x += 0.2;
      ctx.lineTo((ir * Math.cos(x * Math.PI)) + 125, (ir * Math.sin(x * Math.PI)) + 125);
      x += 0.2;
      ctx.lineTo((or * Math.cos(x * Math.PI)) + 125, (or * Math.sin(x * Math.PI)) + 125);
    }

    ctx.stroke();
  }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
 const canvas = document.getElementById('canvas7');
  const ctx = canvas.getContext('2d');
  
 ctx.beginPath (); 
  
  
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
 const canvas = document.getElementById('canvas8');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  let length = Number(prompt("Length:"));
  if (isNaN(length)){
     alert("Your input is not a number.");
  } else if (input > 100) {
    alert("The pyramid will not fit on the canvas.");
} 
  
  let x = 10;
  let y = canvas.height-10;
  let i = 0;
  let line = 1;

  while (i < 5){  
    for(let j=0 + line;j<=5;j++){
      ctx.strokeRect(x,y-length,length,length);
      x+=length;
    }
    x=10+(length/2)*line;
    y-=length;
    line++;
    i++;
  
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
