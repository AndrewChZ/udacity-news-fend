function inputValidate() {
    console.log("1. starting validation");

    let inputField = document.querySelector("#name");
    if (inputField.classList.value == "invalidInput" && inputField.value.length > 0) {
        console.log("2. comparing validation text");
        let validationText = document.querySelector("#validation-message");
        validationText.innerHTML = "";
        inputField.style.border = "1px solid #BFC4D1";
        inputField.classList.remove('invalidInput')
        return true;
    }
}

export { inputValidate }