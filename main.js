canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasaMarsImagesArray = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
roverWidth = 100;
roverHeight = 90;

backgroundImage = nasaMarsImagesArray[randomNumber];
console.log("backgroundImage = " + backgroundImage);
roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // definindo uma função, ao carregar esta variável
	backgroundImgTag.src = backgroundImage;   // carregando a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadRover; // definindo uma função, ao carregar esta variável
	roverImgTag.src = roverImage;   // carregando a imagem

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	 if(keyPressed=='38')
	 {
		up();
		console.log("up");
	 }
	 if(keyPressed=='40')
	 {
		down();
		console.log("down");
}
if(keyPressed=='39')
{
   right();
   console.log("right");
   }
   if(keyPressed=='37')
   {
	  left();
	  console.log("left");
}
}
function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		console.log("Quando a seta para cima é pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadRover();
	}
}
function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando a seta para baixo é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadRover();
	}
}
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("Quando a seta para esquerda é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadRover();
	}
}
function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("Quando a seta para direita é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadRover();
   }
}
}