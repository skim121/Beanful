// Project One 
// Dec 1, 2021 
// Author: Sarah Kim 


// Start with other windows hidden 
$(".play").hide();
$(".win").hide();
$(".lose").hide();

// Variables (including Jquery)
const $waterBar = $(".waterprogress");
const $bugBar = $(".bugprogress");
const $loveBar = $(".loveprogress"); 
const $harvestBar = $(".harvestprogress"); 
const $charPic = $("#beanchar");


// Harvest Bar Increasing at Set Interval (Assigning interval ID allows for the timer to stop once the game stops)
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
   
// Character Building Class
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
    beanEvolve(){
        let that = this;
        setInterval(function(){
            that.age += 1; 
            if(that.age===20){
                $charPic.fadeOut(400, function(){
                    $(this).attr("src","images/testbean2.png").fadeIn(400);
                });
            };
            if(that.age===40){
                $charPic.fadeOut(400, function(){
                    $(this).attr("src","images/testbean3.png").fadeIn(400);
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
        },500);    
        // Bug bar
        intervalIdBug = setInterval(function(){
            that.bug -= 10;
            $bugBar.css({width:`${that.bug}%`});
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
        },1000);    
        // Love bar
        intervalIdLove= setInterval(function(){
            that.love -= 10;
            $loveBar.css({width:`${that.love}%`});
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
        },700);    
        // Pause all timers 
        let pauseTimer = function(){
            clearInterval(intervalId);
            clearInterval(intervalIdWater);
            clearInterval(intervalIdBug);
            clearInterval(intervalIdLove);
        };
    };

}

let testBean = new Bean("",100,100,100,0);


//Buttons to increase metrics by set amount (also maxing at 100) 
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



// Buttons
let character = "";
$(".beanbutton1").click(function(){
    $(".yellowbean").attr("src","images/borderbean.png");
    $(".coffeebean").attr("src","images/coffeebean.png");
    character = "testbean";
    console.log(character);
});

$(".beanbutton2").click(function(){
    $(".coffeebean").attr("src","images/bordercoffee.png");
    $(".yellowbean").attr("src","images/beanfront.png");
    character = "coffebean"; 
    console.log(character);
});





// Game start button 
$("#playbutton").click(function(){
    
    $(".start").hide();
    $(".play").show(); 
    harvestUp();
    testBean.nameAssign();  
    testBean.beanEvolve(); 
    testBean.barReduce();
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

