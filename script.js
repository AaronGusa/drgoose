// const text = document.getElementById('constructionText');

// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

// const ele = document.querySelectorAll('span');

// for (let i = 0; i < ele.length; i++) {
//     ele[i].style.transform = "rotate(" + i*16.5 + 
//     "deg)";
// }

// const text = document.querySelector('.constructionText p');
// text.innerHTML = text.innerText.split("").map(
//   (char, i) => `<span style="transform: rotate(${i * 7.7}deg)">${char}</span>`
// ).join('');


document.getElementById('contactForm').addEventListener('submit', function(event) { event.preventDefault();
   const honeypot = document.querySelector('[name="contact_me_by_email"]').checked;
    if (honeypot) { 
      console.log('Spam bot detected');
       return;
    } 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const emailContent = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const mailtoLink = `mailto:your-email@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink; 
  }
);