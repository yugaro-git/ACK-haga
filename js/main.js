const objects = document.querySelectorAll(".animation");

const scrollEvent = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

// オプション
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

// IntersectionObserverインスタンス化
const scrollEv = new IntersectionObserver(scrollEvent, options);

// 監視を開始
objects.forEach((object) => {
  scrollEv.observe(object);
});
