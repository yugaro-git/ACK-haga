const objects = document.querySelectorAll(".animation");

const scrollEvent = function (entries) {
  entries.forEach((entry) => {
    let action = entry.target.dataset.action;
    const lottieElement = entry.target; // dotlottie-wc 要素
    const dotLottie = lottieElement.dotLottie; // dotLottie インスタンスを取得

    if (!dotLottie) {
      console.error("dotLottieインスタンスが見つかりません。");
      return;
    }

    if (entry.isIntersecting) {
      if (action === "lottie") {
        dotLottie.play(); // dotLottieインスタンスを使って再生
      } else {
        lottieElement.classList.add("active"); // スクロール感知で「active」のクラス名を付与
      }
    } else {
      if (action === "lottie") {
        dotLottie.pause(); // dotLottieインスタンスを使って停止
      } else {
        lottieElement.classList.remove("active"); // スクロール感知で「active」のクラス名を削除
      }
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
