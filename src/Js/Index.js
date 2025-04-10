// -------- TopButton -------- //

let mybutton = document.getElementById("Top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -------- Loading -------- //

function animateTimelineItems(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}

const timelineObserver = new IntersectionObserver(animateTimelineItems, {
  threshold: 0.5,
});

const projectObserver = new IntersectionObserver(animateTimelineItems, {
  threshold: 0.5,
});

const techObserver = new IntersectionObserver(animateTimelineItems, {
  threshold: 0.5,
});

const timelineItems = document.querySelectorAll(".timeline-item");
const projectItems = document.querySelectorAll(".fifth-items");
const techItems = document.querySelectorAll(".third-container");

timelineItems.forEach((item) => {
  timelineObserver.observe(item);
});

projectItems.forEach((e) => {
  projectObserver.observe(e);
});

techItems.forEach((e) => {
  techObserver.observe(e);
});

// -------- Focus -------- //

function animateScaleItems(entries) {
  if (window.innerWidth <= 900) {
    return;
  }

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "scale(1.1)";
      entry.target.style.transition = "transform 0.5s ease-in-out";
    } else {
      entry.target.style.transform = "scale(1)";
    }
  });
}

const scaleObserver = new IntersectionObserver(animateScaleItems, {
  threshold: 0.5,
});

const scaleItems = document.querySelectorAll(".scale-item");

scaleItems.forEach((item) => {
  scaleObserver.observe(item);
});
