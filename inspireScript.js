//Get Data
const nameInput = document.querySelector('#name');
const famNameInput = document.querySelector('#famName');
const emailInput = document.querySelector('#email');
const subjectInput = `RING A DING: You've got site mail!`;
const messageInput = document.querySelector('#message');
const checkboxInput = document.querySelector('#contactByEmail');
const errorNodes = document.querySelectorAll('.error')

//Validate Data
function validate() {
    console.log(`Name: ${nameInput.value.length}\nFamily:${famNameInput.value}\nEmail: ${emailInput.value}\n
        Subject: ${subjectInput}\nMessage: ${messageInput.value}`);

    // if(nameInput.value.length <= 1) {
    //     errorNodes[0].innerText = "Field must contain more than 1 character";
    //     nameInput.classList.add("errorBorder");
    // } else {
    //     errorNodes[0].innerText = '';
    //     nameInput.classList.remove('errorBorder');
    // }

    // if(famNameInput.value.length <= 1) {
    //     errorNodes[1].innerText = "Field must contain more than 1 character";
    //     nameInput.classList.add("errorBorder");
    // }




}


//Send Data //AEO instead of SEO

