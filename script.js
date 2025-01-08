function openNav(y){
    let x = document.getElementById("navbar2");
    x.style.right = "0"; 
    y.setAttribute("onclick", "closeNav(this)");
    
}
function closeNav(y){
    let x = document.getElementById("navbar2");
    x.style.right = "-50%"; 
    y.setAttribute("onclick", "openNav(this)");
}

window.addEventListener('resize', function() {
    // Get the element you want to change
    const element = document.getElementById('navbar2'); 
  
    // Change the element's properties based on the new window size
    if (window.innerWidth > 640) {
      element.style.right = '-50%';
    } 
  });

let lastScrollTop = 0; // Keeps track of the last scroll position
const navbar = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
        document.getElementById('navbar2').style.right = "-50%";
    } else {
         // Scrolling up
         navbar.classList.remove('hidden');
         document.getElementById('navbar2').style.right = "-50%";
     }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});

//START OF BANNER FUNCTION
function closeBanner(x){
    x.parentElement.style.display = "none";
}
//END OF BANNER FUNCTION
/*Carousel section */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    let currentIndex = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    };
  
    const showNextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };
  
    const showPrevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    };
  
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);
  
    // Auto-slide every 5 seconds (optional)
    setInterval(showNextSlide, 10000);
  });
  
  //Classes and pricing 

  const cardWrapper = document.querySelector('.card-wrapper')
  const widthToScroll = cardWrapper.children[0].offsetWidth
  const arrowPrev = document.querySelector('.arrow.prev')
  const arrowNext = document.querySelector('.arrow.next')
  const cardBounding = cardWrapper.getBoundingClientRect()
  const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
  let currScroll = 0
  let initPos = 0
  let clicked = false

  cardImageAndLink.forEach(item=> {
  item.setAttribute('draggable', false)
  })

  arrowPrev.onclick = function() {
  cardWrapper.scrollLeft -= widthToScroll
  }

  arrowNext.onclick = function() {
  cardWrapper.scrollLeft += widthToScroll
  }

  cardWrapper.onmousedown = function(e) {
  cardWrapper.classList.add('grab')
  initPos = e.clientX - cardBounding.left
  currScroll = cardWrapper.scrollLeft
  clicked = true
  }

  cardWrapper.onmousemove = function(e) {
  if(clicked) {
      const xPos = e.clientX - cardBounding.left
      cardWrapper.scrollLeft = currScroll + -(xPos - initPos)
  }
  }

  cardWrapper.onmouseup = mouseUpAndLeave
  cardWrapper.onmouseleave = mouseUpAndLeave

  function mouseUpAndLeave() {
  cardWrapper.classList.remove('grab')
  clicked = false
  }

//FAQs SECTION FUNCTIONS START
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
//FAQs SECTION FUNCTIONS END 
