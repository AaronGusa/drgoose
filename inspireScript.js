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

    sendMail();


}

function sendMail() { document.getElementById('contactForm').addEventListener('submit', function(event) { event.preventDefault();
    const honeypot = document.querySelector('[name="contact_me_by_email"]').checked;
     if (honeypot) { 
       console.log('Spam bot detected');
        return;
     } 
     const name = document.getElementById('name').value;
     const famName = document.getElementById('famName').value;
     const subject = `RING A DING: You've got site mail!`;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     const emailContent = `Name: ${name}\nFamily:${famName}\nEmail: ${email}\n\nStory Premise: ${message}`;
     const mailtoLink = `mailto:drgoosebooks@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
     window.location.href = mailtoLink; 
     console.log(emailContent);
   }
 );
 }

//Send Data //AEO instead of SEO

