
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




document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-course");
    const courseContent = document.getElementById("course-content");
  
    const courseData = {
      seo: {
        img: "assets/images/seo.svg",
        heading: "Search Engine Optimization (SEO)",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Master SEO fundamentals",
          "Local SEO Strategies",
          "E-Commerce SEO",
          "Effective keyword research",
        ],
        link: "https://example.com/seo",
      },
      sem: {
        img: "assets/images/sem.svg",
        heading: "Search Engine Marketing (SEM)",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "PPC marketing",
          "Mobile App Marketing",
          "Affiliate Marketing strategies",
        ],
        link: "https://example.com/sem",
      },
      smm: {
        img: "assets/images/smm.svg",
        heading: "Social Media Marketing (SMM)",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Social Media Optimization (SMO)",
          "Facebook Marketing strategies",
          "Evolving social media trends",
        ],
        link: "https://example.com/smm",
      },
      web: {
        img: "assets/images/web.svg",
        heading: "Web Analytics",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Google Analytics expertise",
          "Analytics setup and configuration",
          "Reporting for performance improvement",
        ],
        link: "https://example.com/web",
      },
      email: {
        img: "assets/images/email.svg",
        heading: "Email Marketing",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Email marketing techniques",
          "Setting up email accounts",
          "Analyzing email campaigns for engagement",
        ],
        link: "https://example.com/email",
      },
      content: {
        img: "assets/images/content.svg",
        heading: "Content Marketing",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Internal link structuring",
          "HTML code cleanup",
          "Creating effective marketing content",
        ],
        link: "https://example.com/content",
      },
      inbound: {
        img: "assets/images/inbound.svg",
        heading: "Inbound Marketing",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Setting up campaign goals",
          "Funnel creation and optimization",
          "Tracking and reporting data",
        ],
        link: "https://example.com/inbound",
      },
      "e-com": {
        img: "assets/images/ecom.svg",
        heading: "E-Commerce Marketing",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Product keyword research",
          "Inventory management strategies",
          "Streamlining e-commerce supply chains",
        ],
        link: "https://example.com/ecom",
      },
      orm: {
        img: "assets/images/orm.svg",
        heading: "Online Reputation Management (ORM)",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Managing your brand’s online presence",
          "Monitoring market trends",
          "Enhancing and protecting your reputation",
        ],
        link: "https://example.com/orm",
      },
      affiliate: {
        img: "assets/images/affiliate.svg",
        heading: "Affiliate Marketing",
        duration: "3 Months",
        mode: "Classroom/Online",
        points: [
          "Promoting products through affiliate networks",
          "Earning commissions and building partnerships",
        ],
        link: "https://example.com/affiliate",
      },
    };
  
    function loadCourseContent(courseKey) {
      const course = courseData[courseKey];
      if (!course) return;
  
      courseContent.innerHTML = `
        <img src="${course.img}" alt="${course.heading}" class="img-fluid mb-3">
        <h3 class="course-card-heading">${course.heading}</h3>
        <div class="mb-3 mt-4">
          <i class="fa-regular fa-calendar-check" style="color: #2E63D8;font-size: 20px;"></i> 
          <span class="course-card-span">${course.duration}</span>
          <i class="fa-solid fa-graduation-cap" style="margin-left: 40px; color: #2E63D8;font-size: 20px;"></i> 
          <span class="course-card-span">${course.mode}</span>
        </div>
        <ul class="mb-3 course-card-li">
          ${course.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
        <hr class="course-card-hr">
        <a href="${course.link}" class="explore-more" target="_blank">Explore More &rarr;</a>
      `;
    }
  
    loadCourseContent("seo");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active"));
  
        this.classList.add("active");
  
        const courseKey = this.getAttribute("data-course");
        loadCourseContent(courseKey);
      });
    });
  });
  


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
  




  document.addEventListener("DOMContentLoaded", function () {
    const modeButtons = document.querySelectorAll(".learning-mode-btn");
    const learningImage = document.getElementById("learning-image");
    const learningPoints = document.getElementById("learning-points");
  
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
  
    modeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        modeButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        const mode = button.dataset.mode;
        const modeData = modes[mode];
  
        learningImage.src = modeData.image;
  
        learningPoints.innerHTML = modeData.points
          .map((point) => `<li>${point}</li>`)
          .join("");
      });
    });
  });
  