document.getElementById("checkBoxShowBeingTypedPassword").addEventListener('change', function () {

    
    if (this.checked) {
        let inputElements = document.querySelectorAll("input")
        for (let inputElement of inputElements) { if (inputElement["type"] == "password") { inputElement.setAttribute("type", "text") } }
    } else {
        let inputElements = document.querySelectorAll("input")
        for (let inputElement of inputElements) { if (inputElement["class"] == "password") { inputElement.setAttribute("type", "password") } }
    }

}), { once: false } ;

