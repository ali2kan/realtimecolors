// FAQ

const faqQuestions = document.querySelectorAll(".faq");
const faqAnswers = document.querySelectorAll(".faq-a");
const faqIcons = document.querySelectorAll(".faq-icon");

faqQuestions.forEach((faqQuestion, index) => {
  faqQuestion.addEventListener('click', () => {
    faqIcons[index].classList.toggle("expand");
    faqAnswers[index].classList.toggle("expand");
  });
});


function highlightToolbar() {
  var toolbar = document.getElementById("toolbar");
  toolbar.classList.add("highlighted");
  setTimeout(function() {
    toolbar.classList.remove("highlighted");
  }, 1000);
}



// TIP

const tipBar = document.getElementById('tip-bar');
const closeBtn = document.getElementById('close-btn');
const randomizeBtn = document.getElementById('randomize');

function showTipBar() {
  tipBar.classList.add('show');
}

function hideTipBar() {
  tipBar.classList.remove('show');
}

closeBtn.addEventListener('click', hideTipBar);

randomizeBtn.addEventListener('click', function(event) {
  if (!localStorage.getItem('tipShown')) {
    setTimeout(showTipBar, 2000);
    localStorage.setItem('tipShown', true);
  }
});

if (localStorage.getItem('tipShown')) {
  tipBar.style.display = 'none';
}





// hamburger menu 

if (window.innerWidth < 1100) {
    const hamburger = document.querySelector('#hamburger');
    const mobileMenu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('hide')
    });
}





// SHARE

function copyPageUrl() {
    const pageUrl = window.location.href;
  
    navigator.clipboard.writeText(pageUrl);
  
    const shareButton = document.querySelector('.share-link-buttn');
    shareButton.textContent = 'Copied!';
    shareButton.classList.add('copied');
  
    setTimeout(function() {
      shareButton.textContent = 'Share';
      shareButton.classList.remove('copied');
    }, 2000);
  }
  