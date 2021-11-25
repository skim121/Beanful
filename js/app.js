// Project One 

// Character Building
class Bean {
    constructor(name, water, bug, love){
        this.name = name; 
        this.water = water; 
        this.bug = bug;
        this.love = love; 
    } 

}

const testBean = new Bean("",80,80,80);
let harvestTimeRemaining = 60; 

// Variables (including Jquery)

const $waterBar = $(".waterprogress");
const $bugBar = $(".bugprogress");
const $loveBar = $(".loveprogress"); 
const $harvestBar = $(".harvestprogress"); 


function barReduce(){
    setInterval(function(){
        testBean.water -= 3;
        $waterBar.css({width:`${testBean.water}%`});
    },200);    
    setInterval(function(){
        testBean.bug -= 10;
        $bugBar.css({width:`${testBean.bug}%`});
    },700);    
    setInterval(function(){
        testBean.love -= 5;
        $loveBar.css({width:`${testBean.love}%`});
    },400);        
}

function harvestUp(){
    setInterval(function(){
        if(harvestTimeRemaining>0){
            harvestTimeRemaining -= 1; 
            let harvestWidth = ((60-harvestTimeRemaining)/60)*100;
            $harvestBar.css({width: `${harvestWidth}%`});
            console.log(harvestTimeRemaining);
            $(".harvesttime").html(harvestTimeRemaining);
        } else {
            return;
        };
    },500);
}

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
});

$(".homebutton").click(function(){
    $(".play").hide();
    $(".start").show();
    location.reload();
});
