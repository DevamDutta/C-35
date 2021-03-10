//Create variables here
var dog,database,foodS,foodStock
var dogimg,dogimg2

function preload()
{
	//load images here
  dogimg = loadImage("images/dogimg.png")
  dogimg2 = loadImage("images/dogimg1.png")

}

function setup() {
	createCanvas(800, 590);
  database = firebase.database()
  dog = createSprite(400,350,25,25)
  dog.addImage(dogimg)
  dog.scale=.1


  foodStock=database.ref('Food')
foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogimg2)
}


  drawSprites();
  //add styles here
  text("food remaining"+foodS,170,200)
  textSize(15)
  text("note: press up arrow key to feed drago milk",130,10,300,20)

}


function readStock(data){
  foodS=data.val()
  }

  function writeStock(x){

    if(x<=0){
      x=0;
      }else{
      x=x-1;
      }

    database.ref('/').update({
    Food:x
    })
    }
