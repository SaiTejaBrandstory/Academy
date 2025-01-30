
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.question'); 
  question.addEventListener('click', () => {
    faqItems.forEach(innerItem => {
      innerItem.classList.remove('active');
    });

    item.classList.add('active');
  });
});

faqItems[0].classList.add('active');



window.onload = function () {
  const modeButtons = document.querySelectorAll(".learning-mode-btn");
  const learningImage = document.getElementById("learning-image");
  const learningPoints = document.getElementById("learning-points");

  if (!modeButtons.length || !learningImage || !learningPoints) {
      console.error("Elements not found! Check class and ID names.");
      return;
  }

  const modes = {
      "on-site": {
          image: "assets/images/on-site-learning.svg",
          points: [
              "Interactive classroom sessions with industry experts creative learning experience",
              "Hands-on projects and real-world case studies",
              "Build connections with fellow students, instructors, and professionals",
              "Flexible batch schedules to suit your needs",
          ],
      },
      "self-paced": {
          image: "assets/images/self-paced-learning.svg",
          points: [
              "Flexible, online courses designed for self-paced learning",
              "Access to expert-led video modules and resources",
              "Access to materials and updates till the course completion",
              "Virtual support and guidance are available.",
          ],
      },
  };

  // **Preload images for instant switching**
  Object.values(modes).forEach(mode => new Image().src = mode.image);

  modeButtons.forEach(button => {
      button.addEventListener("click", function () {
          modeButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          const mode = button.dataset.mode;
          const modeData = modes[mode];

          // **Instant update without flickering**
          learningImage.src = modeData.image;
          learningPoints.innerHTML = modeData.points.map(point => `<li>${point}</li>`).join("");
      });
  });
};


$(document).ready(function(){
  $('.certificate-slider').slick({
    dots: true,  // Enables slick dots (white)
    infinite: true,  // Infinite loop
    speed: 1000,  // Fade transition speed (1 second)
    slidesToShow: 1,  // Only one image visible at a time
    slidesToScroll: 1,  // Scroll one image at a time
    autoplay: true,  // Enable auto play
    autoplaySpeed: 2000,  // Set auto-play speed to 2 seconds (2000ms)
    fade: true,  // Use fade effect between slides
    cssEase: 'linear',  // Transition ease
    arrows: false,  // Disable arrows
    draggable: false,  // Disable mouse drag
    swipe: false,  // Disable touch swipe
    touchMove: false,  // Disable touch-based movement
    focusOnSelect: false,  // Disable focus on select
    pauseOnHover: false,  // Don't pause when hover
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const courses = [
      { key: "seo", img: "assets/images/seo.svg", title: "Search Engine Optimization (SEO)", duration: "3 Months", mode: "Classroom", points: ["Master SEO fundamentals", "Local SEO Strategies", "E-Commerce SEO", "Effective keyword research"], link: "#" },
      { key: "sem", img: "assets/images/sem.svg", title: "Search Engine Marketing (SEM)", duration: "3 Months", mode: "Classroom", points: ["PPC marketing", "Mobile App Marketing","Affiliate Marketing strategies"], link: "#" },
      { key: "smm", img: "assets/images/smm.svg", title: "Social Media Marketing (SMM)", duration: "3 Months", mode: "Classroom", points: ["Social Media Optimization (SMO)", "Facebook Marketing strategies", "Evolving social media trends"], link: "#" },
      { key: "web", img: "assets/images/web.svg", title: "Web Analytics", duration: "3 Months", mode: "Classroom", points: ["Google Analytics expertise", "Analytics setup and configuration", "Reporting for performance improvement"], link: "#" },
      { key: "email", img: "assets/images/email.svg", title: "Email Marketing", duration: "3 Months", mode: "Classroom", points: ["Email marketing techniques", "Setting up email accounts", "Analyzing email campaigns for engagement"], link: "#" },
      { key: "content", img: "assets/images/content.svg", title: "Content Marketing", duration: "3 Months", mode: "Classroom", points: ["Internal link structuring", "HTML code cleanup", "Creating effective marketing content"], link: "#" },
      { key: "inbound", img: "assets/images/inbound.svg", title: "Inbound Marketing", duration: "3 Months", mode: "Classroom", points: ["Setting up campaign goals", "Funnel creation and optimization", "Tracking and reporting data"], link: "#" },
      { key: "ecom", img: "assets/images/ecom.svg", title: "E-Commerce Marketing", duration: "3 Months", mode: "Classroom", points: ["Product keyword research", "Inventory management strategies", "Streamlining e-commerce supply chains"], link: "#" },
      { key: "orm", img: "assets/images/orm.svg", title: "Online Reputation Management (ORM)", duration: "3 Months", mode: "Classroom", points: ["Managing your brand’s online presence", "Monitoring market trends", "Enhancing and protecting your reputation"], link: "#" },
      { key: "affiliate", img: "assets/images/affiliate.svg", title: "Affiliate Marketing", duration: "3 Months", mode: "Classroom", points: ["Promoting products through affiliate networks", "Earning commissions and building partnerships"], link: "#" }
  ];

  const courseCarousel = document.getElementById("courseCarousel");
  const courseImage = document.getElementById("courseImage");
  const courseTitle = document.getElementById("courseTitle");
  const courseDuration = document.getElementById("courseDuration");
  const courseMode = document.getElementById("courseMode");
  const courseList = document.getElementById("courseList");
  const courseLink = document.getElementById("courseLink");
  let activeButton = null;

  function loadCourses() {
      courseCarousel.innerHTML = "";
      const fragment = document.createDocumentFragment();
      courses.forEach((course, index) => {
          let btn = document.createElement("button");
          btn.className = "btn btn-course";
          btn.innerText = course.title;
          btn.dataset.index = index;
          btn.addEventListener("click", function () {
              setActiveButton(this);
              loadCourseContent(index);
          });
          fragment.appendChild(btn);
      });
      courseCarousel.appendChild(fragment);
  }

  function setActiveButton(button) {
      if (activeButton) {
          activeButton.classList.remove("active-btn");
      }
      button.classList.add("active-btn");
      activeButton = button;
  }

  function loadCourseContent(index) {
      const course = courses[index];
      courseImage.src = course.img;
      courseTitle.textContent = course.title;
      courseDuration.textContent = course.duration;
      courseMode.textContent = course.mode;
      courseList.innerHTML = course.points.map((p) => `<li>${p}</li>`).join("");
      courseLink.href = course.link;
  }

  document.getElementById("prevBtn").addEventListener("click", () => courseCarousel.scrollLeft -= courseCarousel.children[0].offsetWidth);
  document.getElementById("nextBtn").addEventListener("click", () => courseCarousel.scrollLeft += courseCarousel.children[0].offsetWidth);
  

  loadCourses();
  if (courseCarousel.children.length > 0) {
      setActiveButton(courseCarousel.children[0]);
      loadCourseContent(0);
  }
});


function setActiveButton(button) {
  if (activeButton) {
      activeButton.classList.remove("active-btn");
  }

  // Prevent click blinking effect
  button.style.pointerEvents = "none"; // Disable click briefly
  requestAnimationFrame(() => {
      button.classList.add("active-btn");
      button.style.pointerEvents = ""; // Re-enable click
  });

  activeButton = button;
}






  document.querySelectorAll('.academy-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');
  
      document.querySelectorAll('.academy-answer').forEach((answer) => {
        answer.style.display = 'none';
      });
      document.querySelectorAll('.academy-question').forEach((q) => {
        q.classList.remove('active');
        q.querySelector('.academy-toggle-icon').textContent = '+';
      });
  
      if (!isActive) {
        question.classList.add('active');
        question.querySelector('.academy-toggle-icon').textContent = '-';
        answer.style.display = 'block';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.academy-answer').forEach((answer) => {
      answer.style.display = 'none';
    });
    document.querySelectorAll('.academy-question').forEach((q) => {
      q.classList.remove('active');
      q.querySelector('.academy-toggle-icon').textContent = '+';
    });
  });
  
  
  const placementContent = [
    {
      heading: "Portfolio creation & Soft Skills training",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Elit volutpat mauris vulputate malesuada quam amet nam fames risus. Euismod volutpat amet mollis nibh condimentum. Nunc amet sit amet eu mi mi. Nisl cras mollis arcu maecenas risus feugiat facilisi in purus. ",
        "Sed sapien enim fusce morbi massa. Lacinia sollicitudin in morbi ipsum. ",
        "Et mauris convallis aliquet quis adipiscing nullam fringilla. Condimentum massa facilisi aliquet maecenas scelerisque cursus faucibus lobortis risus. Dolor at ultricies viverra senectus dolor.",
      ],
    },
    {
      heading: "Resume Building & Mock Interviews",
      paragraphs: [
        "Suspendisse potenti. Nullam id dolor id nibh ultricies vehicula.",
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
        "Vestibulum id ligula porta felis euismod semper.",
      ],
    },
    {
      heading: "Placement Assistance & Career Guidance",
      paragraphs: [
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        "Aenean lacinia bibendum nulla sed consectetur.",
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      ],
    },
  ];
  
  let currentIndex = 0;
  
  function updatePlacementContent(index) {
    const headingElement = document.getElementById("placement-heading");
    const paragraphsContainer = document.getElementById("placement-paragraphs");
  
    headingElement.textContent = placementContent[index].heading;
  
    paragraphsContainer.innerHTML = placementContent[index].paragraphs
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
  }
  
  document.getElementById("prev-button").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + placementContent.length) % placementContent.length;
    updatePlacementContent(currentIndex);
  });
  
  document.getElementById("next-button").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % placementContent.length;
    updatePlacementContent(currentIndex);
  });
  
  updatePlacementContent(currentIndex);
  

