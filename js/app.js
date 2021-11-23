// Project One 

const testBean = {
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
