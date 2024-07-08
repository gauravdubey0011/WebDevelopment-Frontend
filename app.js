const arrows = document.querySelectorAll(".arrow");
const interiorLists = document.querySelectorAll(".interior-list");

arrows.forEach((arrow,i)=>{
    const itemNum=interiorLists[i].querySelectorAll("img").length; 
    let clickCounter=0;
    arrow.addEventListener("click",()=>{
        clickCounter++;
        if(itemNum-(2+clickCounter)>=0){
            interiorLists[i].style.transform = `translateX(${
                interiorLists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`;
        } else{
            interiorLists[i].style.transform = "translateX(0)";
            clickCounter=0;
        }
    });

    console.log(Math.floor(window.innerWidth/270));
});

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(
    ".container,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball"
);

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classlist.toggle("active")
})