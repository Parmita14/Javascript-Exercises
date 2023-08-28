function removeClassOnScroll(element,className){
    window.addEventListener("scroll",function(){
        if(element.classList.contains(className)){
            element.classList.remove(className);
        }
    });
}
const box1 = document.querySelector("#box1");
removeClassOnScroll(box,"highlight");

const box2 = document.querySelector("#box2");
removeClassOnScroll(box2,"active");
