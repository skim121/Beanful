// Project One 

$(".play").hide();
$(".win").hide();
$(".lose").hide();

// Variables (including Jquery)
let harvestTimeRemaining = 60; 
const $waterBar = $(".waterprogress");
const $bugBar = $(".bugprogress");
const $loveBar = $(".loveprogress"); 
const $harvestBar = $(".harvestprogress"); 
const $charPic = $("#beanchar");

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
            console.log(that.age);
            that.age += 1; 
            if(that.age>20){
                $charPic.attr("src","images/testbean2.png");
            };
            if(that.age>40){
                $charPic.attr("src","images/testbean3.png");
            }
        },500); 
    };

}

let testBean = new Bean("B",80,80,80,1);





// Static Bar Reducing at Set Interval
function barReduce(){
    setInterval(function(){
        testBean.water -= 3;
        $waterBar.css({width:`${testBean.water}%`});
        if(testBean.water <=0){
            $(".start").hide();
            $(".play").hide();
            $(".win").hide();
            $(".lose").show();
            return;
        };
    },200);    
    setInterval(function(){
        testBean.bug -= 10;
        $bugBar.css({width:`${testBean.bug}%`});
        if(testBean.bug <=0){
            $(".start").hide();
            $(".play").hide();
            $(".win").hide();
            $(".lose").show();
            return;
        };
    },700);    
    setInterval(function(){
        testBean.love -= 5;
        $loveBar.css({width:`${testBean.love}%`});
        if(testBean.love <=0){
            $(".start").hide();
            $(".play").hide();
            $(".win").hide();
            $(".lose").show();
            return;
        };  
    },400);      
    
    
 
}

// Harvest Bar Increasing at Set Interval
function harvestUp(){
    setInterval(function(){
        if(harvestTimeRemaining>0){
            harvestTimeRemaining -= 1; 
            let harvestWidth = ((60-harvestTimeRemaining)/60)*100;
            $harvestBar.css({width: `${harvestWidth}%`});
            // console.log(harvestTimeRemaining);
            $(".harvesttime").html(harvestTimeRemaining);
        } else {
            $(".start").hide();
            $(".play").hide();
            $(".win").show();
            $(".lose").hide();
            return;
        };
    },500);
}
   

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
    barReduce();
    harvestUp();
    testBean.beanEvolve(); 
});

$(".homebutton").click(function(){
    $(".play").hide();
    $(".start").show();
    location.reload();
});



