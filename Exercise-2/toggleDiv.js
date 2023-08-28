function toggleDivDisplayOnClick(divId){
    const div = document.getElementById(divId);
    if(div.style.display === "none"){
        div.style.display = "block";
    }else{
        div.style.display ="none";
    }
}
// html
//{/* <button onclick = "toggleDivDisplayOnClick('myDiv)">toggle div dispaly</button>
//<div id="myDiv" style="display:none;">This is the content of the div</div> */}

