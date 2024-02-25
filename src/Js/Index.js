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

// -------- Timeline -------- //

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

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item) => {
  timelineObserver.observe(item);
});
