

/**
 * BOOK ARRAY
 */
const books = [
  {
    title: 'Who Am I Really',
    blurb: `This little bear is starting to wonder who he really is!<br><br>
              Join our furry friend on an enchanting journey of self-discovery. As he searches for answers, he turns 
              to his wise and loving parents. Together, they help him understand that he is more than just a bear - He is
              a cherished child of God.`,
    link: 'Coming TBD',
    pic: '/assets/images/bookcovers/WhoAmIReally.png',
    release: 'January 31, 2025'
  },
  {
    title: 'The Family Investigation',
    blurb: `In this heartwarming tale of two sibling turtles. Embark on a journey with them as they navigate the currents
            of family life. One day, they stumble upon an inspiring document on their wall, 'A Proclamation to the World', which
            outlines the ideals of a perfect family. Curious and eager, they begin to measure their family against these lofty standards.`,
    link: 'Coming TBD',
    pic: '/assets/images/bookcovers/TheFamInvestigation.png',
    release: 'January 31, 2025'
  },
  {
    title: 'The Bad Idea',
    blurb: `Discover how ideas shape our experiences and perceptions through this adventure with sister Fox. Join her journey
            as she realizes how a  bad idea can affect her interactions with her family and how a simple good idea can rescue her
            her from the entangling effects of poor choices.`,
    link: 'Coming TBD',
    pic: '/assets/images/bookcovers/TheBadIdea.png',
    release: 'January 31, 2025'
  },
  {
    title: 'What is Our Baby',
    blurb: `Dive into an enchanting telling of three curious owl siblings. When their father brings home surprise toy bags, they 
            start to wonder if their pregnant mother is anything like blind bags. Could she be carrying a fairy princess? Maybe a 
            playful puppy? Or perhaps even a bunch of chicken nuggets? `,
    link: 'Coming TBD',
    pic: '/assets/images/bookcovers/WhatIsOurBaby.png',
    release: 'January 31, 2025'
  },
  {
    title: 'Mothers',
    blurb: `Dive into an enchanting telling of three curious owl siblings. When their father brings home surprise toy bags, they 
            start to wonder if their pregnant mother is anything like blind bags. Could she be carrying a fairy princess? Maybe a 
            playful puppy? Or perhaps even a bunch of chicken nuggets? `,
    link: 'Coming TBD',
    pic: '/assets/images/bookcovers/Mothers.png',
    release: 'April 20, 2025'

  },
  {
    title: 'Fathers',
    blurb: `Dive into an enchanting telling of three curious owl siblings. When their father brings home surprise toy bags, they 
            start to wonder if their pregnant mother is anything like blind bags. Could she be carrying a fairy princess? Maybe a 
            playful puppy? Or perhaps even a bunch of chicken nuggets? `,
    link: 'Coming TBD',
    pic: '/assets/images/bookcovers/Fathers.png',
    release: 'April 20, 2025'
  }
];

// 

let bookContainer = document.querySelector('.bookCont');
let i = 0;
books.forEach(book => {
  let link;
  if (book.link != 'Coming TBD') { 
    link = '<button class="bookButton"><a class="bookLink" href="#">${book.link}</a></button>';
  } else {
    link = `<div class="bookAvailCont"><h1 class="bookAvail">Available on Amazon <br>${book.release}</h1></div>`;
  };

  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book'+ [i]);
  bookDiv.innerHTML = `
    <div class=bookCont>
      <div class=bookWordCont>
        <div class=bookImgCont>
          <img class="bookImg" src="${book.pic}" alt="Book Image">   
        </div>
        <h2 class="bookH">${book.title}</h2> 
        <p class="bookP">${book.blurb}</p> 
        ${link}
        </div> 
    </div>  
    <br>
  `;
  bookContainer.appendChild(bookDiv);
  i++;
});