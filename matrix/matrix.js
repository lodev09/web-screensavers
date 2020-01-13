var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.outerHeight;
c.width = window.outerWidth;

// word characters - taken from the unicode charset
var words = "abcdefghijklmnopqrstuvwxyz0123456789";

// converting the string into an array of single characters
words = words.split("");

var font_size = 16;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = c.height

//drawing the characters
function draw() {
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
	ctx.shadowBlur = 0;
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.shadowColor = '#0f0';
	ctx.shadowBlur = 3;
	ctx.font = font_size + "px 'Courier New'";
	//looping over drops
	for(var i = 0; i < drops.length; i++) {
		//a random words character to print
		var text = words[Math.floor(Math.random() * words.length)];

		var x = i * font_size;
		var y = drops[i] * font_size;

		var random = Math.random() * (150 - 100) + 100;
		if (y < random) {
			ctx.fillStyle = "#90c0a4";
		} else {
			ctx.fillStyle = "#0f0";
		}

		ctx.fillText(text, x, y);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i] * font_size > c.height && Math.random() > 0.990)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 120);