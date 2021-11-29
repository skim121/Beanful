// Project One 

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
                console.log(harvestTimeRemaining);
            };
        },500);
}
   

// Character Building
class Bean {
    constructor(name, water, bug, love, age){
        this.name = name; 
        this.water = water; 
        this.bug = bug;
        this.love = love; 
        this.age = age;
    } 

    beanEvolve(){
        let that = this;
        setInterval(function(){
            that.age += 1; 
            if(that.age>20){
                $charPic.attr("src","images/testbean2.png");
            };
            if(that.age>40){
                $charPic.attr("src","images/testbean3.png");
            }
        },500); 
    };

    barReduce(){
        let that = this;
        let intervalIdWater;
        let intervalIdBug;
        let intervalIdLove;

        intervalIdWater = setInterval(function(){
            that.water -= 10;
            console.log(that.water);
            $waterBar.css({width:`${that.water}%`});
            if(that.water <=0){
                $(".start").hide();
                $(".play").hide();
                $(".win").hide();
                $(".lose").show();
                pauseTimer();
                return;
            };
            if(harvestTimeRemaining==0){
                $(".start").hide();
                $(".play").hide();
                $(".win").show();
                $(".lose").hide();
                pauseTimer();
                return;
            };
        },500);    
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
            if(harvestTimeRemaining==0){
                $(".start").hide();
                $(".play").hide();
                $(".win").show();
                $(".lose").hide();
                pauseTimer();
                return;
            };
        },1000);    
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
            if(harvestTimeRemaining==0){
                $(".start").hide();
                $(".play").hide();
                $(".win").show();
                $(".lose").hide();
                pauseTimer();
                return;
            };
        },700);    
        
        let pauseTimer = function(){
            clearInterval(intervalId);
            clearInterval(intervalIdWater);
            clearInterval(intervalIdBug);
            clearInterval(intervalIdLove);
        };
    }
}



let testBean = new Bean("B",100,100,100,1);





// Static Bar Reducing at Set Interval
// function barReduce(){
//     setInterval(function(){
//         testBean.water -= 3;
//         $waterBar.css({width:`${testBean.water}%`});
//         if(testBean.water <=0){
//             $(".start").hide();
//             $(".play").hide();
//             $(".win").hide();
//             $(".lose").show();
//             return;
//         };
//     },200);    
//     setInterval(function(){
//         testBean.bug -= 10;
//         $bugBar.css({width:`${testBean.bug}%`});
//         if(testBean.bug <=0){
//             $(".start").hide();
//             $(".play").hide();
//             $(".win").hide();
//             $(".lose").show();
//             return;
//         };
//     },700);    
//     setInterval(function(){
//         testBean.love -= 5;
//         $loveBar.css({width:`${testBean.love}%`});
//         if(testBean.love <=0){
//             $(".start").hide();
//             $(".play").hide();
//             $(".win").hide();
//             $(".lose").show();
//             return;
//         };  
//     },400);      
// }



// Buttons 
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


$("#playbutton").click(function(){
    testBean.name = $("#nameinput").val();
    if (testBean.name.length == 0){
        $(".beanname").html("Bean");
    } else {
        $(".beanname").html(testBean.name);
    }; 
    $(".start").hide();
    $(".play").show();   
    harvestUp();
    testBean.beanEvolve(); 
    testBean.barReduce();
});

$(".homebutton").click(function(){
    $(".play").hide();
    $(".start").show();
    location.reload();
});

$(".tryagain").click(function(){
    $(".play").hide();
    $(".lose").hide();
    $(".win").hide();
    $(".start").show();
    location.reload();
});

