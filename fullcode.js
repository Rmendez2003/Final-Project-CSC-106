//Rafael Bitmoji Hardcode
var xPos =101;
var yPos=103;
var bitmojiHeight= 85;

//Function that draw Head
var drawHead = function(xPos, yPos, bitmojiHeight){

noStroke();
//head
fill(243, 207, 187);

ellipse(xPos + (bitmojiHeight/100 * 100),yPos +(bitmojiHeight/100 * 100),bitmojiHeight/100 *77,bitmojiHeight/100 *100);//Head
arc(xPos + (bitmojiHeight/100 * 100),yPos +(bitmojiHeight/100 * 143) ,bitmojiHeight/100 * 47,bitmojiHeight/100 * 44,bitmojiHeight/100 * -29,bitmojiHeight/100 * 303);//Chin
rect(xPos +(bitmojiHeight/100 * 71),yPos + (bitmojiHeight/100 *103),bitmojiHeight/100 *50,bitmojiHeight/100 *50,bitmojiHeight/100 *50);//Side Shape
rect(xPos + (bitmojiHeight/115 *80),yPos + 84,50,50,50);//Side Shape

//Hat
stroke(0, 0, 0);
fill(17, 74, 217);
arc(xPos +(bitmojiHeight/100 * 100), yPos +(bitmojiHeight/100 * 86), bitmojiHeight/100 *85, bitmojiHeight/100 *71,180,360);
rect(xPos + (bitmojiHeight/100 *23),yPos + (bitmojiHeight/100 *77),bitmojiHeight/100 *37,bitmojiHeight/100 *9);
fill(243, 207, 187);
rect(xPos + (bitmojiHeight/100 *72),yPos +(bitmojiHeight/100 * 73),bitmojiHeight/100 *55,bitmojiHeight/100 *9);


//Eyes
fill(255, 255, 255);
ellipse(xPos +(bitmojiHeight/100 * 117),yPos + (bitmojiHeight/100 *111),bitmojiHeight/100 *19,bitmojiHeight/100 *17);
ellipse(xPos + (bitmojiHeight/100 *82),yPos +(bitmojiHeight/100 * 111),bitmojiHeight/100 *19,bitmojiHeight/100 *17);
fill(0, 0, 0);
ellipse(xPos +(bitmojiHeight/100 * 82),yPos + (bitmojiHeight/100 *111),bitmojiHeight/100 *10,bitmojiHeight/100 *7);
ellipse(xPos + (bitmojiHeight/100 *117),yPos + (bitmojiHeight/100 *111),bitmojiHeight/100 *10,bitmojiHeight/100 *7);

//Nose
fill(255, 255, 255);
bezier(xPos + (bitmojiHeight/100 *98),yPos + (bitmojiHeight/100 *127),xPos + (bitmojiHeight/100 *126),yPos +(bitmojiHeight/100 * 138),xPos + (bitmojiHeight/100 *94) ,yPos +(bitmojiHeight/100 * 109),xPos +(bitmojiHeight/100 * 98),yPos + (bitmojiHeight/100 *97));

//Smile
stroke(0, 0, 0);
fill(255, 255, 255);
arc(xPos +(bitmojiHeight/100 * 101), yPos +(bitmojiHeight/100 * 134),bitmojiHeight/100 *40,bitmojiHeight/100 *28,0,180);

};

//Function that draws shirt
var drawBody = function(xPos, yPos, bitmojiHeight){
//shirt
stroke(0, 0, 0);
line(xPos +(bitmojiHeight/100 * 81),yPos +(bitmojiHeight/100 * 157),xPos +(bitmojiHeight/100 * 103),yPos +(bitmojiHeight/100 * 198));
line(xPos +(bitmojiHeight/100 * 118),yPos + (bitmojiHeight/100 *158),xPos +(bitmojiHeight/100 * 100),yPos +(bitmojiHeight/100 * 191));
line(xPos + (bitmojiHeight/100 *82),yPos +(bitmojiHeight/100 * 155),xPos + (bitmojiHeight/100 *55),yPos +(bitmojiHeight/100 * 215));
line(xPos +(bitmojiHeight/100 * 120),yPos + (bitmojiHeight/100 *157),xPos +(bitmojiHeight/100 * 132),yPos +(bitmojiHeight/100 * 198));
line(xPos + (bitmojiHeight/100 *56),yPos + (bitmojiHeight/100 *215),xPos +(bitmojiHeight/100 * 136),yPos + (bitmojiHeight/100 *216));

//initials
fill(255, 0, 0);
text("RM",xPos + (bitmojiHeight/100 *92),yPos + (bitmojiHeight/100 *201),bitmojiHeight/100 *20,bitmojiHeight/100 *20);

};

//Function that draw whole bitmoji
var drawBitmoji = function(xPos, yPos, bitmojiHeight){
drawHead(xPos, yPos, bitmojiHeight);
drawBody(xPos, yPos, bitmojiHeight);
};

drawBitmoji(10,100,bitmojiHeight);

// Imani Bitmoji Hard Code
var drawImaniBitmoji = function (x, y, bitmojiSize) {

//hair//
    noStroke();
    fill(0, 0, 0);
    ellipse(x + (bitmojiSize/100*175) , y + (bitmojiSize/100*193), bitmojiSize/100*130, bitmojiSize/100*184);

//hair part//  
    fill(189, 127, 61);
    rect(x + (bitmojiSize/100*175) , y + (bitmojiSize/100*102) , bitmojiSize/100*1, bitmojiSize/100*15);

//head//
    fill(189, 127, 61);
    ellipse(x + (bitmojiSize/100*175) , y + (bitmojiSize/100*173) , bitmojiSize/100*99, bitmojiSize/100*115);
   
//eyes//
    fill(255, 253, 250);
    ellipse(x + (bitmojiSize/100*151), y + (bitmojiSize/100*158), bitmojiSize/100*37, bitmojiSize/100*34);
    ellipse(x + (bitmojiSize/100*199), y + (bitmojiSize/100*158), bitmojiSize/100*37, bitmojiSize/100*34);
   
//pupils//
    fill(77, 54, 27);
    ellipse(x + (bitmojiSize/100*151), y + (bitmojiSize/100*158), bitmojiSize/100*18, bitmojiSize/100*18);
    ellipse(x + (bitmojiSize/100*199), y + (bitmojiSize/100*158), bitmojiSize/100*18, bitmojiSize/100*18);

//eyelids//
    fill(189, 127, 61);
    ellipse(x + (bitmojiSize/100*159), y + (bitmojiSize/100*146), bitmojiSize/100*54, bitmojiSize/100*13);
    ellipse(x + (bitmojiSize/100*189), y + (bitmojiSize/100*144) , bitmojiSize/100*54, bitmojiSize/100*18);

//mouth//
fill(0, 0, 0);
rect(x + (bitmojiSize/100*156), y + (bitmojiSize/100*197), bitmojiSize/100*32, bitmojiSize/100*3);

//body//
    fill(189, 127, 61);
    arc(x + (bitmojiSize/100*178) , y + (bitmojiSize/100*277) , bitmojiSize/100*118, bitmojiSize/100*109, 180, 360);
   

//shirt//
    fill(204, 183, 130);
    rect(x + (bitmojiSize/100*144), y + (bitmojiSize/100*231), bitmojiSize/100*3, bitmojiSize/100*39);
    rect(x + (bitmojiSize/100*208), y + (bitmojiSize/100*230), bitmojiSize/100*3, bitmojiSize/100*39);
    rect(x + (bitmojiSize/100*120), y + (bitmojiSize/100*264), bitmojiSize/100*116, bitmojiSize/100*13);

//earrings//
    fill(255, 247, 0);
    ellipse(x + (bitmojiSize/100*126), y + (bitmojiSize/100*190), bitmojiSize/100*10, bitmojiSize/100*10);
    ellipse(x + (bitmojiSize/100*226), y + (bitmojiSize/100*190), bitmojiSize/100*10, bitmojiSize/100*10);

//initials//
    fill(231, 228, 235);
    textSize(26);
    text("ID", x + (bitmojiSize/100*153), y + (bitmojiSize/100*233) , bitmojiSize/100*205, bitmojiSize/100*98);
   
};


//Global Variables
var currentScene = 0;
var screen1;
var swScreen;
var eiScreen;
var opScreen;
var opYesScreen;
var opNoScreen;
var sScreen;
var wScreen;
var eScreen;
var iScreen;

//Variables to keep track of which the user is more like
var summer = 0;
var winter = 0;
var extrovert = 0;
var introvert = 0;
var optimistic = 0;
var pessimistic = 0;

//Khan Button Class
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//drawing all buttons
 var startButton = new Button({
    x: 97,
    y: 338,
    width: 170,
    label: "Start",
    onClick: function() {
        currentScene = 1;
        screen1();
    }
});

//Summer/ Winter Button
 var swButton = new Button({
    x: 64,
    y: 70,
    width: 283,
    label: "Summer or Winter",
    onClick: function() {
        currentScene = 2;
        swScreen();
    }
});

//Extrovert/Introvert Button
 var eiButton = new Button({
    x: 64,
    y: 170,
    width: 283,
    label: "Extrovert or Introvert ",
    onClick: function() {
        currentScene = 3;
        eiScreen();
    }
});

//Optimistic/Pessimistic Button.
 var opButton = new Button({
    x: 64,
    y: 270,
    width: 283,
    label: "Optimistic Or Pessimistic",
    onClick: function() {
        currentScene = 4;
        opScreen();
    }
});

//Check Button for Extrovert and Introvert
var checkeiButton = new Button({
    x: 203,
    y: 350,
    width: 199,
    label: "Check",
    onClick: function() {
    if( extrovert > introvert){
        currentScene = 9;
        eScreen();
    }
    else if ( introvert > extrovert) {
        currentScene = 10;
        iScreen();
    }
        
    
  
    }
});

//Check Button for Summer and WInter
var checkswButton = new Button({
    x: 203,
    y: 350,
    width: 199,
    label: "Check",
    onClick: function() {
    if( summer > winter){
        currentScene = 7;
        sScreen();
    }
    else if ( winter > summer) {
        currentScene = 8;
        wScreen();
    }
        
    
  
    }
});

//Check Button for Optimistic Or Pessimistic
var checkopButton = new Button({
    x: 203,
    y: 350,
    width: 199,
    label: "Check",
    onClick: function() {
    if( optimistic > pessimistic){
        currentScene = 5;
        opYesScreen();
    }
    else if ( pessimistic > optimistic) {
        currentScene = 6;
        opNoScreen();
    }
        
    
  
    }
});

//Screen 1 this is going to be the splashscreen of the game
var screen1 = function(){
background(0, 0, 0);
startButton.draw();
fill(255, 0, 0);
textAlign(CENTER);
text("This is a small self asssessment ",196,20);
text("to see what kind of person you are ",196,39);
text("In Three Different Categories",196,57);
fill(38, 166, 94);
text("Click on the options as many times as you like ",203,95);
text("So say you like icecream alot, click on it twice! ",204,120);
fill(68, 77, 179);
text("When you are done, click Check for your results",204,171);
fill(163, 97, 70);
text("Click Start to Begin!",204,205);
drawImaniBitmoji(-94,215,79);
drawBitmoji(209,215,122);



};

//Screen 2 where user can make a selection of what they would like the game to guess
var screen2 = function(){
background(255, 0, 0);
fill(0, 0, 0);
swButton.draw();
eiButton.draw();
opButton.draw();
text("Type of person?",150,350);
text("Are you a...",150,0);
};


//Extrovert + Introvert Screen
var eiScreen = function (){
fill(135, 122, 191);
rect(0,0,200,400);
fill(135, 73, 73);
rect(200,0,200,400);
};

//Optimistic Person Screen
var opYesScreen = function(){
background(17, 255, 0);
textSize(20);
fill(201, 0, 0);
text("You Seem To Be an Optimistic Person!",27,184);

};

//Pessimistic Person Screen
var opNoScreen = function(){
background(255, 0, 0);
textSize(20);
fill(0, 0, 0);
text("You Seem To Be a Pessimistic Person!",27,184);

};

//Summer Person Screen
var sScreen = function(){
background(224, 220, 0);
textSize(20);
fill(0, 0, 0);
text("You Seem To Be a Summer Type of Person!",3,184);

};

//Winter Person Screen
var wScreen = function(){
background(175, 206, 219);
textSize(20);
fill(0, 0, 0);
text("You Seem To Be a Winter Type of Person!",3,184);

};

//Extrovert Screen
var eScreen = function(){
background(208, 217, 174);
textSize(20);
fill(0, 0, 0);
text("You Seem To Be an extrovert!",62,184);

};

//Introvert Screen
var iScreen = function(){
background(73, 84, 30);
textSize(20);
fill(0, 0, 0);
text("You Seem To Be an introvert!",64,184);

};



//Restart Button
var restButton = new Button({
    x: 2,
    y: 350,
    width: 199,
    label: "Restart",
    onClick: function() {
    currentScene = 0;    
    screen1();
     summer = 0;
     winter = 0;
     extrovert = 0;
     introvert = 0;
     optimistic = 0;
     pessimistic = 0;
    }
});

//Summer Choice Button
var q1Button = new Button({
    x: 2,
    y: 30,
    width: 199,
    label: "Ice Cream",
    onClick: function() {
        summer = summer + 1;
    }
});

var q2Button = new Button({
    x: 2,
    y: 90,
    width: 198,
    label: "Iced Coffe",
    onClick: function() {
        summer = summer + 1;
    }
});

var q3Button = new Button({
    x: 2,
    y: 150,
    width: 198,
    label: "Frozen Lemondade",
    onClick: function() {
        summer = summer + 1;
    }
});


var q4Button = new Button({
    x: 2,
    y: 210,
    width: 198,
    label: "Shorts",
    onClick: function() {
        summer = summer + 1;
    }
});

var q5Button = new Button({
    x: 2,
    y: 270,
    width: 198,
    label: "Beach",
    onClick: function() {
        summer = summer + 1;
    }
});

var q6Button = new Button({
    x: 200,
    y: 30,
    width: 198,
    label: "Hot Chocolate",
    onClick: function() {
        winter++;
    }
});

var q7Button = new Button({
    x: 200,
    y: 270,
    width: 283,
    label: " Snow Slide",
    onClick: function() {
       winter++;
    }
});


var q8Button = new Button({
    x: 200,
    y: 90,
    width: 283,
    label: "Hot Coffee",
    onClick: function() {
        winter++;
    }
});


var q9Button = new Button({
    x: 200,
    y: 150,
    width: 283,
    label: "Tea",
    onClick: function() {
        winter++;
    }
});


var q10Button = new Button({
    x: 200,
    y: 210,
    width: 283,
    label: "Sweatpant",
    onClick: function() {
        winter++;
    }
});


//Introvert Extrovert Buttons
var q1ieButton = new Button({
    x: 2,
    y: 30,
    width: 199,
    label: "Being Around People",
    onClick: function() {
        extrovert++;
    }
});

var q2ieButton = new Button({
    x: 2,
    y: 90,
    width: 198,
    label: "Going out",
    onClick: function() {
        extrovert++;
    }
});

var q3ieButton = new Button({
    x: 2,
    y: 150,
    width: 198,
    label: "Meeting New People",
    onClick: function() {
        extrovert++;
    }
});


var q4ieButton = new Button({
    x: 2,
    y: 210,
    width: 198,
    label: "Dislike Comfort Zone",
    onClick: function() {
        extrovert++;
    }
});

var q5ieButton = new Button({
    x: 2,
    y: 270,
    width: 198,
    label: "Big Gatherings",
    onClick: function() {
        extrovert++;
    }
});

var q6ieButton = new Button({
    x: 200,
    y: 30,
    width: 198,
    label: "Being Alone",
    onClick: function() {
        introvert++;
    }
});

var q7ieButton = new Button({
    x: 200,
    y: 270,
    width: 283,
    label: "Smaller Events",
    onClick: function() {
       introvert++;
    }
});


var q8ieButton = new Button({
    x: 200,
    y: 90,
    width: 283,
    label: "Staying in",
    onClick: function() {
        introvert++;
    }
});


var q9ieButton = new Button({
    x: 200,
    y: 150,
    width: 283,
    label: "Shy to Meet Others",
    onClick: function() {
        introvert++;
    }
});


var q10ieButton = new Button({
    x: 200,
    y: 210,
    width: 283,
    label: "Like Comfort Zone",
    onClick: function() {
        introvert++;
    }
});

//Optimistic / Pessimistic Button
var q1opButton = new Button({
    x: 2,
    y: 30,
    width: 199,
    label: " Cup is Half Full",
    onClick: function() {
        optimistic++;
    }
});

var q2opButton = new Button({
    x: 2,
    y: 90,
    width: 198,
    label: "Positive Side of Event",
    onClick: function() {
        optimistic++;
    }
});

var q3opButton = new Button({
    x: 2,
    y: 150,
    width: 198,
    label: "Odds are With Me",
    onClick: function() {
        optimistic++;
    }
});


var q4opButton = new Button({
    x: 2,
    y: 210,
    width: 198,
    label: "I Have Good Luck",
    onClick: function() {
        optimistic++;
    }
});

var q5opButton = new Button({
    x: 2,
    y: 270,
    width: 198,
    label: "Keep Going!",
    onClick: function() {
        optimistic++;
    }
});

var q6opButton = new Button({
    x: 200,
    y: 30,
    width: 198,
    label: "Cup Is Half Empty",
    onClick: function() {
        pessimistic++;
    }
});

var q7opButton = new Button({
    x: 200,
    y: 270,
    width: 283,
    label: "Give Up",
    onClick: function() {
     pessimistic++;
    }
});


var q8opButton = new Button({
    x: 200,
    y: 90,
    width: 283,
    label: "Negative Side of Event",
    onClick: function() {
        pessimistic++;
    }
});


var q9opButton = new Button({
    x: 200,
    y: 150,
    width: 283,
    label: "Odds Are Against Me",
    onClick: function() {
        pessimistic++;
    }
});


var q10opButton = new Button({
    x: 200,
    y: 210,
    width: 283,
    label: "I Have Bad Luck",
    onClick: function() {
        pessimistic++;
    }
});



//Summer And Winter screen

var swScreen = function(){
fill(255, 0, 0);
rect(0,0,200,400);
fill(0, 140, 255);
rect(200,0,200,400);
q1Button.draw();
q2Button.draw();
q3Button.draw();
q4Button.draw();
q5Button.draw();
q6Button.draw();
q7Button.draw();
q8Button.draw();
q9Button.draw();
q10Button.draw();
restButton.draw();
checkswButton.draw();
};

//Extrovert + Introvert Screen
var eiScreen = function (){
fill(135, 122, 191);
rect(0,0,200,400);
fill(135, 73, 73);
rect(200,0,200,400);
q1ieButton.draw();
q2ieButton.draw();
q3ieButton.draw();
q4ieButton.draw();
q5ieButton.draw();
q6ieButton.draw();
q7ieButton.draw();
q8ieButton.draw();
q9ieButton.draw();
q10ieButton.draw();
restButton.draw();
checkeiButton.draw();
};

//optimistic and Pessimistic Screen
var opScreen = function(){
fill(137, 214, 208);
rect(0,0,200,400);
fill(224, 218, 150);
rect(200,0,200,400);
q1opButton.draw();
q2opButton.draw();
q3opButton.draw();
q4opButton.draw();
q5opButton.draw();
q6opButton.draw();
q7opButton.draw();
q8opButton.draw();
q9opButton.draw();
q10opButton.draw();
restButton.draw();
checkopButton.draw();
};


//Draw Function
draw = function()
    {
   if (currentScene === 0){ 
         screen1();
   }
   else if(currentScene === 1){
       screen2();
   }
    
    else if (currentScene === 2){
        swScreen();
        text("Summer: " + summer,55,325);
        text("Winter: " + winter, 255,325);
    }
    
    else if (currentScene === 3){
        eiScreen();
        text("Extrovert: " + extrovert,55,325);
        text("Introvert: " + introvert, 255,325);
    }
    
    else if (currentScene === 4){
        opScreen();
        text("Optimistic: " + optimistic,55,325);
        text("Pessimistic: " + pessimistic, 255,325);
    }
    
    else if (currentScene === 5){
        opYesScreen();
        
    }
    
    else if (currentScene === 6){
        opNoScreen();
    }
    
    else if (currentScene === 7){
        sScreen();
    }
    
    else if (currentScene === 8){
        wScreen();
    }
    
    else if (currentScene === 9){
        eScreen();
    }
    
    else if (currentScene === 10){
        iScreen();
    }
    
};

//MouseClicked Function conditionals
mouseClicked = function() {
    if (currentScene === 0){startButton.handleMouseClick();
    screen2();
    }
    
    if (currentScene === 1){
        swButton.handleMouseClick();
        eiButton.handleMouseClick();
        opButton.handleMouseClick();
    } 
    
    if (currentScene === 2){
        q1Button.handleMouseClick();
        q2Button.handleMouseClick();
        q3Button.handleMouseClick();
        q4Button.handleMouseClick();
        q5Button.handleMouseClick();
        q6Button.handleMouseClick();
        q7Button.handleMouseClick();
        q8Button.handleMouseClick();
        q9Button.handleMouseClick();
        q10Button.handleMouseClick();
        restButton.handleMouseClick();
        checkswButton.handleMouseClick();
    }
    
   if (currentScene === 3){
       q1ieButton.handleMouseClick();
        q2ieButton.handleMouseClick();
        q3ieButton.handleMouseClick();
        q4ieButton.handleMouseClick();
        q5ieButton.handleMouseClick();
        q6ieButton.handleMouseClick();
        q7ieButton.handleMouseClick();
        q8ieButton.handleMouseClick();
        q9ieButton.handleMouseClick();
        q10ieButton.handleMouseClick();
        restButton.handleMouseClick();
        checkeiButton.handleMouseClick();
   }

if (currentScene === 4){
    q1ieButton.handleMouseClick();
        q2opButton.handleMouseClick();
        q3opButton.handleMouseClick();
        q4opButton.handleMouseClick();
        q5opButton.handleMouseClick();
        q6opButton.handleMouseClick();
        q7opButton.handleMouseClick();
        q8opButton.handleMouseClick();
        q9opButton.handleMouseClick();
        q10opButton.handleMouseClick();
        restButton.handleMouseClick();
        checkopButton.handleMouseClick();
}


};


