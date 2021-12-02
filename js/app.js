// Project One 
// Dec 1, 2021 
// Author: Sarah Kim 


// Start with other windows hidden 
$(".play").hide();
$(".win").hide();
$(".lose").hide();

// Variables Shortcut
const $waterBar = $(".waterprogress");
const $bugBar = $(".bugprogress");
const $loveBar = $(".loveprogress"); 
const $harvestBar = $(".harvestprogress"); 
const $charPic = $("#beanchar");


// Harvest bar increasing at set interval (Assigning interval ID allows for the timer to stop once the game stops)
let intervalId; 
let harvestTimeRemaining = 60; 
function harvestUp(){
    intervalId = setInterval(function(){
            if(harvestTimeRemaining>0){
                harvestTimeRemaining -= 1; 
                let harvestWidth = ((60-harvestTimeRemaining)/60)*100;
                $harvestBar.css({width: `${harvestWidth}%`});
                $(".harvesttime").html(harvestTimeRemaining);
            };
        },500);
}
   
// Character building class for multiple beans 
class Bean {
    constructor(name, water, bug, love, age){
        this.name = name; 
        this.water = water; 
        this.bug = bug;
        this.love = love; 
        this.age = age;
    } 

    // Display the name input by the user on the start page
    nameAssign(){
        this.name = $("#nameinput").val();
        if (this.name.length == 0){
            $(".beanname").html("BEANFUL");
        } else {
            $(".beanname").html(this.name);
        }; 
    };

    // Change bean pictures at age = 20 and age = 40 (Game win at age = 60 when harvest is over)
    beanEvolve(img1, img2){
        let that = this;
        setInterval(function(){
            that.age += 1; 
            if(that.age===20){
                $charPic.fadeOut(400, function(){
                    $(this).attr("src", img1).fadeIn(400);
                });
            };
            if(that.age===40){
                $charPic.fadeOut(400, function(){
                    $(this).attr("src", img2).fadeIn(400);
                });
            };
        },500); 
    };

    // Automatic decrease of water, bug, love bars and conditional win and lose stated
    barReduce(){
        let that = this;
        let intervalIdWater;
        let intervalIdBug;
        let intervalIdLove;
        // Water bar
        intervalIdWater = setInterval(function(){
            that.water -= 10;
            $waterBar.css({width:`${that.water}%`});
            lightDim();
            if(that.water <=0){
                $(".start").hide();
                $(".play").hide();
                $(".win").hide();
                $(".lose").show();
                pauseTimer();
                return;
            };
            if(harvestTimeRemaining===0){
                $(".start").hide();
                $(".play").hide();
                $(".win").show();
                $(".lose").hide();
                pauseTimer();
                return;
            };
        },700);    
        // Bug bar
        intervalIdBug = setInterval(function(){
            that.bug -= 10;
            $bugBar.css({width:`${that.bug}%`});
            lightDim();
            if(that.bug <=0){
                $(".start").hide();
                $(".play").hide();
                $(".win").hide();
                $(".lose").show();
                pauseTimer();
                return;
            };
            if(harvestTimeRemaining===0){
                $(".start").hide();
                $(".play").hide();
                $(".win").show();
                $(".lose").hide();
                pauseTimer();
                return;
            };
        },1200);    
        // Love bar
        intervalIdLove= setInterval(function(){
            that.love -= 10;
            $loveBar.css({width:`${that.love}%`});
            lightDim();
            if(that.love <=0){
                $(".start").hide();
                $(".play").hide();
                $(".win").hide();
                $(".lose").show();
                pauseTimer();
                return;
            };
            if(harvestTimeRemaining===0){
                $(".start").hide();
                $(".play").hide();
                $(".win").show();
                $(".lose").hide();
                pauseTimer();
                return;
            };
        },900);    
        // Function to pause all timers (inside the barReduce function)
        let pauseTimer = function(){
            clearInterval(intervalId);
            clearInterval(intervalIdWater);
            clearInterval(intervalIdBug);
            clearInterval(intervalIdLove);
        };
        // Light Dimming
        let lightDim = function(){
            if (that.water<30 || that.bug<30 || that.love<30){
                $(".dimmer").css("display","inline");
            } else {
                $(".dimmer").css("display","none");
            };
        };
    };
};



// Start page - highlighting the chosen bean when clicked
let character = "";
$(".beanbutton1").click(function(){
    $(".yellowbean").attr("src","images/borderbean.png");
    $(".coffeebean").attr("src","images/coffeebean.png");
    character = "testbean";
});

$(".beanbutton2").click(function(){
    $(".coffeebean").attr("src","images/bordercoffee.png");
    $(".yellowbean").attr("src","images/beanfront.png");
    character = "coffeebean"; 
});

// Character Conditional 
function chooseChar(){
    switch(character){
        case "testbean" :
            let testBean = new Bean("",100,100,100,0);
            $charPic.attr("src","images/testbean1.png");
            $(".start").hide();
            $(".play").show(); 
            harvestUp();
            testBean.nameAssign();  
            testBean.beanEvolve("images/testbean2.png","images/testbean3.png"); 
            testBean.barReduce();

            // Testbean buttons to increase metrics by set amount (also maxing at 100) 
            $(".waterbutton").click(function(){
                if(testBean.water<90){
                    testBean.water += 10;
                    $waterBar.css({width:`${testBean.water}%`});
                } else{
                    testBean.water = 100;
                    $waterBar.css({width:`${testBean.water}%`});
                };
            });

            $(".bugbutton").click(function(){
                if(testBean.bug<93){
                    testBean.bug += 7;
                    $bugBar.css({width:`${testBean.bug}%`});
                } else{
                    testBean.bug = 100;
                    $bugBar.css({width:`${testBean.bug}%`});
                };
            });

            $(".lovebutton").click(function(){
                if(testBean.love<85){
                    testBean.love += 15;
                    $loveBar.css({width:`${testBean.love}%`});
                } else{
                    testBean.love = 100;
                    $loveBar.css({width:`${testBean.love}%`});
                };
            });

            break;

        case "coffeebean" :
            let coffeeBean = new Bean("",100,100,100,0);
            $charPic.attr("src","images/coffeebean1.png");
            $(".start").hide();
            $(".play").show(); 
            harvestUp();
            coffeeBean.nameAssign();  
            coffeeBean.beanEvolve("images/coffeebean2.png","images/coffeebean3.png"); 
            coffeeBean.barReduce();
            $("#beanpost").attr("src","images/coffeepost.png");

            //Coffeebean buttons to increase metrics by set amount (also maxing at 100) 
            $(".waterbutton").click(function(){
                if(coffeeBean.water<90){
                    coffeeBean.water += 10;
                    $waterBar.css({width:`${coffeeBean.water}%`});
                } else{
                    coffeeBean.water = 100;
                    $waterBar.css({width:`${coffeeBean.water}%`});
                };
            });

            $(".bugbutton").click(function(){
                if(coffeeBean.bug<93){
                    coffeeBean.bug += 7;
                    $bugBar.css({width:`${coffeeBean.bug}%`});
                } else{
                    coffeeBean.bug = 100;
                    $bugBar.css({width:`${coffeeBean.bug}%`});
                };
            });

            $(".lovebutton").click(function(){
                if(coffeeBean.love<85){
                    coffeeBean.love += 15;
                    $loveBar.css({width:`${coffeeBean.love}%`});
                } else{
                    coffeeBean.love = 100;
                    $loveBar.css({width:`${coffeeBean.love}%`});
                };
            });

            break; 
        
        // If no bean is chosen then shake the text "pick a bean"
        default:
            $(".pick").effect("shake",{direction:"left",times:3},300);
    };
};

// Game start play button 
$("#playbutton").click(function(){
    chooseChar();
});

// Home button to take to start page
$(".homebutton").click(function(){
    $(".play").hide();
    $(".start").show();
    $(".lose").hide();
    $(".win").hide();
    location.reload();
});

// Play again button to take to start page
$(".playagain").click(function(){
    $(".play").hide();
    $(".lose").hide();
    $(".win").hide();
    $(".start").show();
    location.reload();
});

// Try again button to take to start page
$(".tryagain").click(function(){
    $(".play").hide();
    $(".lose").hide();
    $(".win").hide();
    $(".start").show();
    location.reload();
});

