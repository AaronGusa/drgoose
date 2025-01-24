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
    const emailContent = `Name: ${name}\nFamily:${famName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const mailtoLink = `mailto:drgoose@drgoose.ink?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink; 
    console.log(emailContent);
  }
);
}



// let droplets = document.querySelectorAll('.drop');
//  let positions = Array.from({ length: droplets.length }, () => ({ x: 0, y: 0 }));
//  document.addEventListener('mousemove', function(e) { 
//   positions.unshift({ x: e.clientX, y: e.clientY });
  
//   if (positions.length > droplets.length * 20) { positions.pop();}
  
//   droplets.forEach((droplet, index) => {
//      if (positions[index * 10]) { droplet.style.transform = `translate(${positions[index * 20].x - 75}px,
//        ${positions[index * 10].y - 75}px) scale(${1 - index * 0.1})`; } }); });

// const bubble = document.querySelector('.drop');
// let x = Math.random() * window.innerWidth;
// let y = Math.random() * window.innerHeight;
// let vx = (Math.random() - 0.5) * .2;
// let vy = (Math.random() - 0.5) * .2;

// const updatePosition = () => {
//     x += vx;
//     y += vy;

//     if (x <= 0 || x >= window.innerWidth) vx *= -1;
//     if (y <= 0 || y >= window.innerHeight) vy *= -1;

//     bubble.style.transform = `translate(${x}px, ${y}px)`;
// };

// const hitBubble = (e) => {
//     const dx = e.clientX - x;
//     const dy = e.clientY - y;
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance < 50) {
//         vx = (dx / distance) * 1;
//         vy = (dy / distance) * 1;
//     }
// };

// document.addEventListener('mousemove', hitBubble);
// setInterval(updatePosition, .01);
