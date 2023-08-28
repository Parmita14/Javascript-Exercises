// write a function to validate form on submit event

function validateForm(event){
    event.preventDefault();
    // prevent the form from submitting
    const form = event.target;

    let isValid = true;

    for(let i=0;i<form.elements.length;i++){
        const input = form.element[i];
        const value = input.value.trim();
        if(input.hasAttribute("required") && value === ""){
            isValid = false; // validation failed
            input.classList.add("invalid");
        }else{
            input.classList.remove("invalid");
        }
    }
    // show msg of validation
    const msg = document.getElementById("message");
    if(isValid){
        msg.classList.remove("error");
        msg.innerText = "Form submitted successfully";
    }else{
        msg.classList.add("error");
        msg.innerText="Please fill required fields.";
    }

}
const form = document.getElementById("myForm");
form.addEventListener("submit",validateForm);