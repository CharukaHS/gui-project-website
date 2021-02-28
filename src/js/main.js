const setScreenshotWidth = () => {
  // setting width for screenshot container dynamically

  const ss = document.getElementsByClassName("ss");
  const container = document.getElementById("ss_container");

  for (let index = 0; index < ss.length; index++) {
    const element = ss[index];

    // aspect ration of images are 16:9
    // height is 50% of parent
    element.style.height = `${container.offsetHeight / 2}px`;
    element.style.width = `${(container.offsetHeight / 2) * (16 / 9)}px`;
  }
};

const animateScreenshots = () => {
  setScreenshotWidth();

  // individual screenshot
  const ss1 = document.getElementById("ss1");
  const ss2 = document.getElementById("ss2");
  const ss3 = document.getElementById("ss3");
  const ss4 = document.getElementById("ss4");

  ss1.classList.add("ss_0");
  ss2.classList.add("ss_1");
  ss3.classList.add("ss_2");
  ss4.classList.add("ss_3");

  let toggle = true;
  setInterval(() => {
    if (toggle) {
      ss1.classList.add("ss_1");
      ss2.classList.add("ss_2");
      ss3.classList.add("ss_3");
      ss4.classList.add("ss_4");
    } else {
      ss1.classList.remove("ss_1");
      ss2.classList.remove("ss_2");
      ss3.classList.remove("ss_3");
      ss4.classList.remove("ss_4");
    }
    toggle = !toggle;
  }, 5000);
};

const animateFeatureCards = () => {
  const cards = document.getElementsByClassName("feature");
  const current = window.pageYOffset;

  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    const top = element.getBoundingClientRect().top;

    if (current + 100 < top) {
      element.classList.add("feature-active");
    } else {
      element.classList.remove("feature-active");
    }
  }
};

// document onready
(() => {
  window.onresize = () => {
    setScreenshotWidth();
  };

  window.onscroll = () => {
    animateFeatureCards();
  };

  animateScreenshots();
})();
