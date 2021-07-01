const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldclockapi.com/api/json/est/now")
    //change the data in JSON format
    var responseJson = await response.json();
    // write code slice the datetime
    var hour = responseJson.currentDateTime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour > 06 && hour < 19 ){
        bg = "sunrise1.png";
    }
    if(hour > 08 && hour < 19){
        bg = "sunrise2.png";
    }
    if(hour > 10 && hour < 19){
        bg = "sunrise3.png"
    }
    if(hour > 12 && hour < 19){
        bg = "sunrise4.png"
    }
    if(hour > 14 && hour < 19){
        bg = "sunrise5.png"
    }
    if(hour > 16 && hour < 19){
        bg = "sunrise6.png"
    }
    if(hour > 18 && hour < 20){
        bg = "sunset7.png"
    }
    if(hour > 19 && hour < 21){
        bg = "sunset8.png"
    }
    if(hour > 20 && hour < 22){
        bg = "sunset9.png"
    }
    if(hour > 21 && hour < 23){
        bg = "sunset10.png"
    }
    if(hour > 22 && hour < 24){
        bg = "sunset11.png"
    }
    if(hour === 24){
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
