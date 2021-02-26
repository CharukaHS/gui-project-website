const animateScreenshots = () => {
  // individual screenshot
  const ss0 = document.getElementById("ss0");
  const ss1 = document.getElementById("ss1");
  const ss2 = document.getElementById("ss2");
  const ss3 = document.getElementById("ss3");
  const ss4 = document.getElementById("ss4");

  // // expand images from center
  // ss1.classList.add("ss_1");
  // ss2.classList.add("ss_2");
  // ss3.classList.add("ss_3");
  // ss4.classList.add("ss_0");

  // let n = 0;
  // setInterval(() => {
  //   ss1.classList.add("ss_2");
  //   ss2.classList.add("ss_3");
  //   ss3.classList.add("ss_4");
  //   ss4.classList.add("ss_1");
  // }, 2000);
};

// document onready
(() => {
  animateScreenshots();
})();
