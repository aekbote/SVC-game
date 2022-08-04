
 var play,about,info
 var mangoImg,mango
 var pizzaImg,pizza
 var waitimg
 var gameState="waitstate"

 function preload(){
    
    mangoImg = loadImage("/assets/mango.png");
    pizzaImg = loadImage("/assets/pizza.png");
    waitimg = loadImage("assets/wait.gif")
    carrotImg = loadImage("/assets/carrot.png");
    chipsImg = loadImage("/assets/chips.png");
    donutImg = loadImage("/assets/donut.png");
    orangeImg = loadImage("/assets/orange.png");
    fitImg = loadImage("/assets/fit.png");
    mediumImg = loadImage("/assets/medium.png");
    fatImg = loadImage("/assets/fat.png");
    popUp = loadImage("assets/pop.png")
    level1img = loadImage("assets/level1.gif")
    
}

function setup(){
    createCanvas(windowWidth,windowHeight)
  
    // all the buttons
    play=createImg("assets/play.png")
    play.position(width/4,height-200)
    play.size(250,250)
    
    how=createImg("assets/how.png")
    how.position((width/4+width/2),height-150)
    how.size(250,250)
    
    
    about=createImg("assets/about.png")
    about.position((width/2),height-200)
    about.size(250,250)
    

    home=createButton("Home")
    home.position((width/2),height-200)
    home.hide()

    aboutpop=createSprite(width/2,height/2)
    aboutpop.visible=false

    howpop=createSprite(width/2,height/2)
    howpop.visible=false


    player=createSprite(500,200)


/* home=createImg("assets/about.png")
home.position((width/2)-100,height-200)
home.size(250,250)*/

// healthy food sprites
/*mango= createSprite(100,100)
mango.addImage(mangoImg)

pizza= createSprite(100,200)
pizza.addImage(pizzaImg)

orange= createSprite(100,210)
orange.addImage(orangeImg)

donut= createSprite(100,240)
donut.addImage(donutImg)

chips= createSprite(100,280)
chips.addImage(chipsImg)

carrot= createSprite(100,400)
carrot.addImage(carrotImg)

fit = createSprite(100,300)
fit.addImage(fitImg)

medium= createSprite(500,400)
medium.addImage(mediumImg)

fat = createSprite(900,500)
fat.addImage(fatImg)

pop = createSprite(900,720)
pop.addImage(popImg)*/

healthyFoodGroup = new Group();
UnhealthyFoodGroup = new Group();

}

function draw(){
    if(gameState==="waitstate"){
background(waitimg)

about.show()
play.show()
how.show()
home.hide()
aboutpop.visible=false
howpop.visible=false

}


if(play.mousePressed(()=>{
    gameState="playstate"
about.hide()
play.hide()
how.hide()
home.show()
aboutpop.visible=false
howpop.visible=false

}))
   
if(home.mousePressed(()=>{
    gameState="waitstate"
        
    
}))
 



if(how.mousePressed(()=>{
    gameState="howstate"
    home.show()
    about.hide()
    play.hide()
    how.hide()
    aboutpop.visible=false
    howpop.visible=true

}))

if(about.mousePressed(()=>{
    gameState="aboutstate"
        
    home.show()
    about.hide()
    play.hide()
    how.hide()
    aboutpop.visible=true
    howpop.visible=false

}))
    


if(gameState==="playstate"){
    background(level1img)
    //pizza.visible=true

    SpawnHealthyFood();
    SpawnUnhealthyFood();

    if(keyDown("LEFT_ARROW")){
        player.x -=5
        
    }
    
    if(keyDown("RIGHT_ARROW")){
        player.x +=5
    }
    
    if(keyDown("DOWN_ARROW")){
        player.y +=5
    }
    
    if(keyDown("UP_ARROW")){
        player.y -=5
    }


}



if(gameState==="howstate"){
    background(255)
}
if(gameState==="aboutstate"){
    background(180)
}




drawSprites()
}





function SpawnUnhealthyFood(){
    if(frameCount%80 ==0){
        
unhealthy= createSprite(width/2,90)
unhealthy.x = Math.round(random(50,width-50))
unhealthy.y = Math.round(random(50,height-50))

unhealthy.addImage(pizzaImg)
unhealthy.scale=.25
//unhealthy.visible=true


var rand1=Math.round(random(1,3))
switch(rand1){

case 1 : unhealthy.addImage(pizzaImg)
break;

case 2 : unhealthy.addImage(donutImg)
break;

case 3 : unhealthy.addImage(chipsImg)
break;

default:break
    
}

    }
    
}

function SpawnHealthyFood(){
    if(frameCount%60 ==0){
       
        healthy= createSprite(width/2, 80);
        healthy.scale = .25;
        var rand2=Math.round(random(1,3))
        healthy.x = Math.round(random(50,width-50))
        healthy.y = Math.round(random(50,height-50))
        switch(rand2){

            case 1 : healthy.addImage(orangeImg)
            break;

            case 2: healthy.addImage(mangoImg)
            break;

            case 3: healthy.addImage(carrotImg);

        }
    }
    
}