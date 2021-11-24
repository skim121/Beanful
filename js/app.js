// Project One 

// Click Play 





   


let testBean = {
    name: "Bean",
    age: 0,
    water: 0,
    bug: 0, 
    love: 0, 
}

setTimeout(() => {
    const progress = document.querySelector(".waterprogress");
    progress.style.width = progress.getAttribute("data-done")+ "%";
    progress.style.opacity = 1; 
})



$("#playbutton").click(function(){
    testBean.name = $("#nameinput").val();
    $(".beanname").html(testBean.name);
    $(".start").hide();
});

$(".homebutton").click(function(){
    $(".start").show();
    $(".play").hide();
});
