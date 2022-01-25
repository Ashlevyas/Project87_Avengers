
/// Create canvas variable
var canvas= new fabric.Canvas("myCanvas");
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 450;

var block_image_object= "";

function new_image(get_image)
{
   // to upload images
   fabric.Image.fromURL(get_image ,function(Img){
       block_image_object=Img;
       block_image_object.scaleToWidth(140);
       block_image_object.scaleToHeight(150);
     
         
     canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '80') // add appropriate keycode
   {
       // upload red ranger
       block_x=100;
       block_y=50;
       console.log("p key is pressed");
       new_image("black panther.png");
   }
   if(keyPressed == '87')
   {
       block_x = 300;
       block_y=250;
       console.log("w key is pressed");
       new_image("black widow.png");
       // upload green ranger
   }
   
   if(keyPressed == '67')
   {
       block_x =500;
       block_y=400;
       console.log("c key is pressed");
       new_image("captain america.png");
       // upload yellow ranger
   }
   if(keyPressed == '77')
   {
       block_x = 650;
       block_y=500;
       console.log("m key is pressed");
       new_image("captain marvel.jpg");
       // upload pink ranger
   }
   if(keyPressed == '68')
   {
       block_x = 750;
       block_y= 750;
       console.log("d key is pressed");
       new_image("doctor strange.png");
   // upload blue ranger
   }
   if(keyPressed == '71')
   {
       block_x = 750;
       block_y= 750;
       console.log("g key is pressed");
       new_image("groot.png");
   // upload blue ranger
   }
   if(keyPressed == '72')
   {
       block_x = 750;
       block_y= 750;
       console.log("h key is pressed");
       new_image("hulk.jpg");
   // upload blue ranger
   }
   if(keyPressed == '73')
   {
       block_x = 750;
       block_y= 750;
       console.log("i key is pressed");
       new_image("iron man.png");
   // upload blue ranger
   }
   if(keyPressed == '76')
   {
       block_x = 750;
       block_y= 750;
       console.log("l key is pressed");
       new_image("loki.jpg");
   // upload blue ranger
   }
   if(keyPressed == '78')
   {
       block_x = 750;
       block_y= 750;
       console.log("n key is pressed");
       new_image("nebula.png");
   // upload blue ranger
   }
   if(keyPressed == '82')
   {
       block_x = 750;
       block_y= 750;
       console.log("r key is pressed");
       new_image("rocket raccon.png");
   // upload blue ranger
   }
   if(keyPressed == '83')
   {
       block_x = 750;
       block_y= 750;
       console.log("s key is pressed");
       new_image("scarlet witch.jpg");
   // upload blue ranger
   }
   if(keyPressed == '65')
   {
       block_x = 750;
       block_y= 750;
       console.log("a key is pressed");
       new_image("spider man.png");
   // upload blue ranger
   }
   if(keyPressed == '84')
   {
       block_x = 750;
       block_y= 750;
       console.log("t key is pressed");
       new_image("thor.jpg");
   // upload blue ranger
   }
   if(keyPressed == '85')
   {
       block_x = 750;
       block_y= 750;
       console.log("u key is pressed");
       new_image("ultron.jpg");
   // upload blue ranger
   }
   
}