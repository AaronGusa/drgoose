// const text = document.getElementById('constructionText');

// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

// const ele = document.querySelectorAll('span');

// for (let i = 0; i < ele.length; i++) {
//     ele[i].style.transform = "rotate(" + i*16.5 + 
//     "deg)";
// }

const text = document.querySelector('.constructionText p');
text.innerHTML = text.innerText.split("").map(
  (char, i) => `<span style="transform: rotate(${i * 7.7}deg)">${char}</span>`
).join('');


