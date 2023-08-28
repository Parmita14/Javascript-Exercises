function changeButtonText(){
    const button = document.querySelector("button");
    if(button.textContent== "click me!"){
        button.textContent = "Clicked";
    }else{
        button.textContent = "Click Me!";
    }
}
const button = document.querySelector("button");
button.addEventListener("Clicked",changeButtonText);
